import { React, ReactDOM, BrowserRouter, Provider } from "./components";
import App from "./App";
import { Store } from "./reduxStore";
import { pdfjs } from "react-pdf";
import { AuthProvider } from "./contexts/AuthContext";
import { NotificationProvider } from "./contexts/NotificationContext";
import { CommunityProvider } from "./contexts/CommunityContext";
//pdfjs.GlobalWorkerOptions.workerSrc = document.querySelector('meta[name="base_url"]').content + `/pdf.worker.min.js`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={Store}>
            <NotificationProvider>
                <AuthProvider>
                    <CommunityProvider>
                        <App />
                    </CommunityProvider>
                </AuthProvider>
            </NotificationProvider>
        </Provider>
    </BrowserRouter>
);
