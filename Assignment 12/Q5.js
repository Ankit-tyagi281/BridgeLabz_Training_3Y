// Q5. Boolean Logic Access System
const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

// The home is secure only when every required condition is satisfied.
// The negated checks also make it clear that no condition is missing.
const isSecure =
    isAlarmOn &&
    isDoorLocked &&
    isWindowClosed &&
    isOwnerInside &&
    !( !isDoorLocked || !isWindowClosed || !isAlarmOn || !isOwnerInside );

console.log(isSecure ? "Secure" : "Unsafe");

// Change the values above to test different security outcomes.
