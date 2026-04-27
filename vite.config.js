import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { exec } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'open-excel-file',
      configureServer(server) {
        server.middlewares.use('/api/open-file', (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.end(JSON.stringify({ error: 'Method not allowed' }));
            return;
          }

          let body = '';
          req.on('data', (chunk) => (body += chunk));
          req.on('end', () => {
            try {
              const { file } = JSON.parse(body);
              if (!file) {
                res.statusCode = 400;
                res.end(JSON.stringify({ error: 'No file specified' }));
                return;
              }

              // Resolve absolute path to the files directory
              const filePath = path.resolve(__dirname, 'files', file);

              // Open in default app (Excel on Windows)
              exec(`start "" "${filePath}"`, (err) => {
                if (err) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.message }));
                } else {
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ success: true, file: filePath }));
                }
              });
            } catch (e) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
          });
        });
      },
    },
  ],
  server: {
    port: 3000,
    open: true,
  },
});
