import CommentDashboard from "@/components/admin/CommentDashboard";
import DemoSessionGuard from "@/components/admin/DemoSessionGuard";
export const metadata = { title: "Comment moderation" };
export default function CommentsPage() {
  return (
    <DemoSessionGuard>
      <CommentDashboard />
    </DemoSessionGuard>
  );
}
