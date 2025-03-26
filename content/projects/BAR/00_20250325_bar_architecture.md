---
title: BAR Architecture 
description: Beyond All Reason (BAR) is an open-source RTS game built on the Spring Engine
icon: i-material-symbols:logo-dev
url: https://github.com/beyond-all-reason/Beyond-All-Reason
cover: /projects/diagram-export-3-25-2025-8_25_11-PM.png
priority: 1
featured: true
diataxis: explanation
---

# BAR Architecture

architectural relationship between Lua scripts and the Recoil engine in **Beyond All Reason (BAR)**

1. Recoil Engine Core:
    - At the foundation, the Recoil engine manages essential game functions such as physics calculations, rendering, and networking.
2. Lua API Integration:
    - The engine exposes a Lua API, enabling developers to interact with and extend core functionalities without modifying the engine's source code.
3. Lua Scripts:
    - Developers write Lua scripts that utilize the engine's API to implement custom game mechanics, user interfaces, and unit behaviors.
4. Game Content:
    - Assets like 3D models, textures, and sounds are organized within the game's directory structure. Lua scripts can access and manipulate these assets to create dynamic content.
5. Execution Flow:
    - During gameplay, the Recoil engine executes Lua scripts in response to various events (e.g., user inputs, unit actions).
    - The scripts interact with the engine through the Lua API to control game behavior and presentation.

This architecture allows BAR to maintain a clear separation between the engine's core functionalities and game-specific customizations, facilitating flexibility and ease of development.



