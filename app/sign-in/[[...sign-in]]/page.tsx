import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SignIn
        appearance={{
          elements: {
            formButtonPrimary: "bg-accent hover:bg-accent-600",
            footerActionLink: "text-accent hover:text-accent-600",
          },
        }}
      />
    </div>
  );
}
