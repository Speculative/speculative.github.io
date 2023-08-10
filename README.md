# Development

```
npm run dev
```

During development, vlog path is `/vlog`

# Deployment

```
npm run fetch-vlogs
npm run publish-vlogs
npm run build
```

These environment variables are required:

- `GOOGLE_CLIENT_EMAIL`: Service account email
- `GOOGLE_CLIENT_KEY`: Service account private key
- `DRIVE_FOLDER_ID`: vlog folder
- `VLOG_PUBLISH_PATH`: URL path for published vlog section
