# Live Events
*This page will show you how to use the Live Events function in your experience.*

:::warning
This page already considers that you have required and authorized BloxControl at least once in the same script. [Click here](/docs/functions/authentication) for more information.
:::

```lua
local upcomingevents = bloxcontrol.GetUpcomingEvents()
if upcomingevents["success"] == false then
	-- there was an issue with the request. use result["message"] to get the details of the error.
elseif upcomingevents["success"] == true then
	local specificEvent = "NewYear" -- "NewYear" is the event name
	print("start time: " .. upcomingevents[specificEvent].startunix)
	print("end time: " .. upcomingevents[specificEvent].endunix)
end
```