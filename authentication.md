Local Authentication
- Fact Key
  - On a timer, create a refresh token with the secure enclave 
  - Can be set for when the device first turns on
- Bio Key
  - Biometrics on device
  - No refresh token; force re-auth after expiration
- Device Key
  - Generated passkey on device
  - One specific for each domain
- Authentication
  - Send a JWT with each key, a timestamp, username and target domain
  - Is there a need to send more than the Device Key?
    - How to assert that the other two factors were present?
Hive
- All devices on a local system
- A common list of all the domains / profiles that can be authenticated
- A policy so that other devices can change the fact key / bio key when needed
  - Can use multi tennant encryption to provide a second password for each device's secure encleve
