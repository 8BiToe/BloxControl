# Authentication
*In order to use BloxControl in your experience, you will need to authenticate in your experience.*

:::note
Replace GAME-TOKEN with the Game Token that you were provided during registering the experience to BloxControl.
:::

```lua
local bloxcontrol = require(game.ServerScriptService.BloxControl.MainModule)
bloxcontrol.Auth("GAME-TOKEN")
```