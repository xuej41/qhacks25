import AuctionItems from "@/components/auction-items"
import ChatWindow from "@/components/chat-window"

export default function ItemsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Current Auctions</h1>
      <AuctionItems />
      <ChatWindow />
    </div>
  )
}

