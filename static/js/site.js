document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copyTarget);
    if (!target) {
      return;
    }

    const text = target.innerText.trim();
    try {
      await navigator.clipboard.writeText(text);
      const original = button.textContent;
      button.textContent = "Copied";
      button.classList.add("copied");
      window.setTimeout(() => {
        button.textContent = original;
        button.classList.remove("copied");
      }, 1600);
    } catch {
      button.textContent = "Select BibTeX";
    }
  });
});

document.querySelectorAll(".trajectory-raw").forEach((trajectoryBlock) => {
  const codeBlock = trajectoryBlock.querySelector("code");
  if (!codeBlock) {
    return;
  }

  const lines = codeBlock.textContent.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  const events = lines.map((line) => {
    try {
      return JSON.parse(line);
    } catch {
      return null;
    }
  }).filter(Boolean);

  if (events.length === 0) {
    return;
  }

  const rendered = document.createElement("div");
  rendered.className = "trajectory-events";

  events.forEach((event, index) => {
    const card = document.createElement("article");
    card.className = `trajectory-event ${event.type === "tool_use" ? "is-use" : "is-result"}`;

    const heading = document.createElement("div");
    heading.className = "trajectory-event-heading";

    const badge = document.createElement("span");
    badge.className = "trajectory-badge";
    badge.textContent = event.type === "tool_use" ? "Tool call" : "Tool result";

    const title = document.createElement("strong");
    title.textContent = event.name || event.tool_use_id || `Event ${index + 1}`;

    const meta = document.createElement("span");
    meta.className = "trajectory-meta";
    meta.textContent = event.id || event.tool_use_id || "";

    heading.append(badge, title, meta);

    const raw = document.createElement("pre");
    raw.className = "trajectory-json";
    raw.textContent = JSON.stringify(event, null, 2);

    card.append(heading, raw);
    rendered.append(card);
  });

  trajectoryBlock.replaceWith(rendered);
});
