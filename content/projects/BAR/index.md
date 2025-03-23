---
title: BAR
description: Beyond All Reason (BAR) is an open-source RTS game built on the Spring Engine
icon: i-material-symbols:logo-dev
url: https://github.com/beyond-all-reason/Beyond-All-Reason
cover: /projects/BAR4K_Loadingscreen_20-min.png
---


# BAR: Beyond All Reason - Technical Introduction

:reference-card{
  quote='an open-source RTS game built on the Spring Engine, evolving from Total Annihilation with modernized code, enhanced graphics, and improved gameplay mechanics.'
  url='https://github.com/beyond-all-reason/Beyond-All-Reason'
  author='BAR'
}

## Architecture
- **Engine**: C++ Spring RTS Engine with Lua for game logic and OpenGL rendering
- **Game Logic**: Modular, event-driven architecture in Lua
- **Networking**: Client-server model using UDP protocol with action-based replay system
- **Resource Management**: Dynamic allocation system for metal and energy with flow visualization
- **UI**: Lua-based framework with custom, data-driven widgets

## Development
Community-driven model with feature branches, PR reviews, and CI testing.

[Docker build](https://github.com/beyond-all-reason/spring/wiki/SpringRTS-Build-Environment-(Docker))

[Docker build on Windows](https://github.com/beyond-all-reason/spring/wiki/Windows-build-environment:-step%E2%80%90by%E2%80%90step-instructions)

[building without Docker](https://github.com/beyond-all-reason/spring/wiki/Building-and-developing-engine-without-docker)(not recommended)

[MXE](https://github.com/mxe/mxe), or (M cross environment) is a GNU Makefile that compiles a cross compiler and cross compiles many free libraries such as SDL and Qt. Thus, it provides a nice cross compiling environment for various target platforms

## Reference Links
- **Main Repo**: [github.com/beyond-all-reason/Beyond-All-Reason](https://github.com/beyond-all-reason/Beyond-All-Reason)
- **Lobby**: [https://github.com/beyond-all-reason/BYAR-Chobby](https://github.com/beyond-all-reason/BYAR-Chobby)
- **Engine**: [github.com/beyond-all-reason/spring](https://github.com/beyond-all-reason/spring)
- **Website**: [beyondallreason.info](https://www.beyondallreason.info/)