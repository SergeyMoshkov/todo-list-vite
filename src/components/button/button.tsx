import { Mail } from "lucide-react"
 
import { Button } from "@/components/ui/button"
 
export function ButtonWithIcon() {
  return (
    <Button variant="destructive">
      <Mail className="mr-2 h-4 w-4"/> +
    </Button>
  )
}