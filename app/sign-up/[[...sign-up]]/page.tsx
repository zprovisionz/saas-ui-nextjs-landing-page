import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <SignUp
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
