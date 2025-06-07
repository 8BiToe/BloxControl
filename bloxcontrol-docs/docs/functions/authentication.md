# Authentication
*In order to use BloxControl in your experience, you will need to authenticate in your experience.*

:::warning
Make sure you add the code in a **server script** stored in **ServerScriptService**. BloxControl will not run on the client. Attempting to run it on the client could expose sensitive information to malicious actors.
:::

:::note
Replace GAME-TOKEN with the Game Token that you were provided during registering the experience to BloxControl.
:::

```lua
local bloxcontrol = require(102314745163727)
bloxcontrol.Auth("GAME-TOKEN")
```