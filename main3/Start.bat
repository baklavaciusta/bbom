@echo off
title DisSpaceX

:Reconnected

node --max-old-space-size=2048 shard.js

goto Reconnected
