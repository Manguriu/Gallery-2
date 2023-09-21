This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
Stage ThreeTask: Develop a Drag-and-Drop Image gallery using React or Next JsObjective: You will implement a fully functional and responsive image gallery that showcases a collection of images in a visually appealing way.
A user should be able to Login to the gallery page. Authenticated users should be able to use the Drag-and-Drop feature, they should be able to select and drag images, effortlessly rearranging them within the gallery.Requirements:

    Simple Authentication:

This means login with this email and password:
UserName: user@example.com
Password: 1Password
The authentication form fields should have proper validation setup, with proper error messages. You do not need to implement this on the backend yourself, you could use solutions like NextAuth, Auth0 or Clerk, firebase for Auth or add etc.

    Image Display:

Display a grid layout that showcases a collection of images presented in a visually appealing manner with consistent spacing and sizing, add a tag to each image.

    Loading state:

The page should have a loading state for when images are not ready for display, display a skeleton loader or a loading spinner when loading is true

    Search Functionality:

You should have a search field that filters the image list based on the tags added to the images.

    Drag-and-Drop:

Implement the ability for users to drag and drop images within the gallery.

    User-friendly Feedback:

Incorporate smooth animations and visual cues that provide feedback during drag and drop interactions.

    Responsive Design:

Ensure that the gallery is responsive and functions seamlessly on different devices, including mobile phones, tablets, and desktops.

    Design Flexibility:

While adhering to the above requirements, you have the creative freedom to come up with a unique and appealing design.Acceptance Criteria:

    Functional Authentication: A fully functional authentication process.
    Drag-and-Drop Feature: A fully functional drag and drop feature must be implemented.

    Responsiveness: Design must be responsive across various desktop  screens, including mobile and tablet screens.

    User Experience: Design must be intuitive, appealing, and encourage easy navigation and operation (i.e., NO LAGGING).
    Image Display: All Images should have consistent spacing and sizing.
