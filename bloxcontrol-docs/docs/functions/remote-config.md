# Remote Config
*This page will show you how to use the Remote Config function in your experience.*

:::warning
This page already considers that you have required and authorized BloxControl at least once in the same script. [Click here](/docs/functions/authentication) for more information.
:::

```
local config = bloxcontrol.GetRemoteConfig("WeeklyPrice") -- "WeeklyPrice" is the example key
if config["success"] == false then
	-- there was an issue with the request. use result["message"] to get the details of the error.
elseif config["success"] == true then
	print(config["value"]) -- prints out the value
end
```