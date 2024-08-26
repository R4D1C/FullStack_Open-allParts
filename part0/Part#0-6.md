```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST  https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>server: Adds the content of new_note_spa to data.json
    deactivate server
    activate browser
    browser-->>browser: creates a new note, adds it to the notes list and renders it again
    deactivate browser
```