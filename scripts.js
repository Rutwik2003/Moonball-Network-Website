document.addEventListener("DOMContentLoaded", function () {
    updateServerStatus();
    loadPlugins();
});

// Fetch Live Server Status
async function updateServerStatus() {
    const serverIP = "mc.rutwikdev.com:6007"; // Replace with your actual server IP
    const apiURL = `https://api.mcsrvstat.us/2/${serverIP}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data.online) {
            document.getElementById("server-status").innerHTML = `
                <p><strong>Status:</strong> Online ✅</p>
                <p><strong>Players Online:</strong> ${data.players.online}/${data.players.max}</p>
                <p><strong>Version:</strong> ${data.version}</p>
            `;
        } else {
            document.getElementById("server-status").innerHTML = `<p><strong>Status:</strong> Offline ❌</p>`;
        }
    } catch (error) {
        console.error("Error fetching server data:", error);
        document.getElementById("server-status").innerHTML = "<p>Unable to fetch server data.</p>";
    }
}

// Load Plugins & Commands from commands.json
async function loadPlugins() {
    const response = await fetch('commands.json');
    const plugins = await response.json();

    let pluginListHTML = "";
    for (const [pluginName, pluginData] of Object.entries(plugins)) {
        pluginListHTML += `
            <div class="plugin-card">
                <h3 onclick="togglePlugin('${pluginName}')">${pluginName} ▼</h3>
                <div class="command-list" id="${pluginName}-commands">
                    ${pluginData.commands.map(cmd => `
                        <div class="command-item" id="cmd-${cmd.name.replace(/\//g, '')}" onclick="toggleCommandDetails('${cmd.name}')">
                            ${cmd.name}
                            <div class="command-details" id="details-${cmd.name.replace(/\//g, '')}">
                                <p><strong>Description:</strong> ${cmd.description}</p>
                                <p><strong>Syntax:</strong> <code>${cmd.syntax}</code></p>
                                <p><strong>Example:</strong> <code>${cmd.example}</code></p>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `;
    }

    document.getElementById("plugin-list").innerHTML = pluginListHTML;
}

// Toggle Plugin Dropdown
function togglePlugin(pluginName) {
    let commandList = document.getElementById(`${pluginName}-commands`);
    commandList.style.display = (commandList.style.display === "block") ? "none" : "block";
}

// Toggle Command Details (Expands under the same command)
function toggleCommandDetails(commandId) {
    let detailsElement = document.getElementById(`details-${commandId.replace(/\//g, '')}`);
    detailsElement.style.display = (detailsElement.style.display === "block") ? "none" : "block";
}

// Toggle Search Bar Visibility & Animate Icon Inside
function toggleSearch() {
    let searchContainer = document.querySelector(".search-container");
    searchContainer.classList.toggle("search-active");
    document.getElementById("search").focus();
}

// Improved Search Function: Expands Plugin Section & Highlights Found Command
function filterCommands() {
    const searchInput = document.getElementById("search");
    const searchValue = searchInput.value.toLowerCase();
    const pluginCards = document.querySelectorAll(".plugin-card");
    let found = false;

    pluginCards.forEach(pluginCard => {
        const commandList = pluginCard.querySelector(".command-list");
        const commands = pluginCard.querySelectorAll(".command-item");
        let pluginHasMatch = false;

        commands.forEach(cmd => {
            if (cmd.textContent.toLowerCase().includes(searchValue)) {
                cmd.style.display = "block";
                cmd.classList.add("highlight-command"); // Highlight the found command
                pluginHasMatch = true;
                found = true;
            } else {
                cmd.style.display = "none";
                cmd.classList.remove("highlight-command"); // Remove highlight if not searched
            }
        });

        if (pluginHasMatch) {
            commandList.style.display = "block"; // Open section if match found
        } else {
            commandList.style.display = "none"; // Hide section if no match
        }
    });

    if (!found) {
        document.getElementById("plugin-list").innerHTML = `<p class="no-results">No commands found. Try a different search.</p>`;
    }
}

// Reset Search & Show All Commands Again When Cleared
document.getElementById("search").addEventListener("input", function () {
    if (this.value === "") {
        loadPlugins(); // Reload plugins if search is cleared
    }
});
