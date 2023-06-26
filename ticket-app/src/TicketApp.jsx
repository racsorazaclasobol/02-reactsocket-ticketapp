import { BrowserRouter } from "react-router-dom"
import { RouterPage } from "./pages/RouterPage"
import { UiProvider } from "./context/UiContext"
import { SocketProvider } from "./context/SocketContext"

export const TicketApp = () => {


	return (
		<>
			<SocketProvider>
				<UiProvider>
					<BrowserRouter >
						<RouterPage />
					</BrowserRouter>
				</UiProvider>
			</SocketProvider>
		</>
	)
}
