# Promo Codes
*This page will show you how to use the Promo Codes function in your experience.*

:::warning
This page already considers that you have required and authorized BloxControl at least once in the same script. [Click here](/docs/functions/authentication) for more information.
:::

```lua
local result = bloxcontrol.RedeemPromoCode(player, "SALE") -- "SALE" is the example promocode - "player" is the player that is redeeming this code
if result["success"] == false then
	-- there was an issue with the request. use result["message"] to get the details of the error.
elseif result["success"] == true then
	local exampleKey = "cash"
	print(result[exampleKey])
end
```