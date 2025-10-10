# Deploying to Vercel

This guide explains how to deploy both the frontend and backend of this application to Vercel.

## Prerequisites

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

## Deployment Steps

### 1. Deploy Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

3. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (first time) or **Y** (subsequent deploys)
   - Project name? **renart-backend** (or your preferred name)
   - In which directory is your code located? **./** (press Enter)
   - Want to override settings? **N**

4. After deployment, Vercel will provide a URL like:
   ```
   https://renart-backend-xxxxxxxx.vercel.app
   ```
   **Save this URL** - you'll need it for the frontend configuration.

5. For production deployment:
   ```bash
   vercel --prod
   ```

### 2. Deploy Frontend

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Create a `.env.production` file with your backend URL:
   ```bash
   echo "VITE_API_URL=https://your-backend-url.vercel.app" > .env.production
   ```
   Replace `https://your-backend-url.vercel.app` with the URL from step 1.4.

3. Deploy to Vercel:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N** (first time) or **Y** (subsequent deploys)
   - Project name? **renart-frontend** (or your preferred name)
   - In which directory is your code located? **./** (press Enter)
   - Want to override settings? **N**

5. Set the environment variable in Vercel:
   ```bash
   vercel env add VITE_API_URL
   ```
   When prompted, enter your backend URL: `https://your-backend-url.vercel.app`
   Select: **Production**, **Preview**, and **Development**

6. For production deployment:
   ```bash
   vercel --prod
   ```

## Alternative: Deploy via Vercel Dashboard

### Backend Deployment

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Set the **Root Directory** to `backend`
5. Click "Deploy"

### Frontend Deployment

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Set the **Root Directory** to `frontend`
5. Add Environment Variable:
   - **Key**: `VITE_API_URL`
   - **Value**: Your deployed backend URL (e.g., `https://renart-backend.vercel.app`)
6. Click "Deploy"

## Important Notes

1. **CORS**: The backend is configured to accept requests from any origin using `cors()`. For production, you should restrict this to your frontend domain:
   ```javascript
   app.use(cors({
     origin: 'https://your-frontend-url.vercel.app'
   }));
   ```

2. **Environment Variables**: Always use environment variables for sensitive data and URLs that change between environments.

3. **Rebuild**: Whenever you update the backend URL, you need to redeploy the frontend for the changes to take effect.

4. **Monitoring**: Check your deployments at:
   - Backend: `https://vercel.com/your-username/renart-backend`
   - Frontend: `https://vercel.com/your-username/renart-frontend`

## Troubleshooting

- **API not connecting**: Verify the `VITE_API_URL` environment variable is set correctly in Vercel dashboard
- **CORS errors**: Check the CORS configuration in [backend/index.js](backend/index.js:8)
- **Build fails**: Check the build logs in Vercel dashboard for specific errors

## Quick Redeploy

For subsequent deployments:

```bash
# Backend
cd backend
vercel --prod

# Frontend (after updating env vars if needed)
cd ../frontend
vercel --prod
```
