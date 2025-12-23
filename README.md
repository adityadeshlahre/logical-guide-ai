## App Demo Image

<img width="801" height="512" alt="image" src="https://github.com/user-attachments/assets/30b530ea-643d-41f1-a30e-5be316e4138d" />

## Approch 1

for backend with external api or agent bundlled within the a single pyhton binary file exported into extraResouce in electron app!

## Approch 2

single electron app with gemini sdk which can transcribe the image and send it gemini for processing and return the response to the electron app!

### Arhitecture

1. Electron app will launch and load with last session else ask for API key
2. it will capture the screenShot of screen two ways
    - after writing prompt and click on start button
    - mouse leaves ( with 10 ms delay )
3. process those image via GEMINI SDK and return response
4. stream the response and after clicking at the next stap it will again take screenShot and process it and return response
    - two cases here
        - if user has done the last thing correctly or not
            - if not then if current screen matches with last screen then do not call gemini api { different node for this }
            - if yes then again take screen shot and proccess it and return response for next step
5. [loop] : "until goal reached" { initial prompt -> step 2 }
