'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import Client from "@/lib/SetupAppolo";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider client={Client}>
      <QueryClientProvider client={queryClient}>
      {children}
      </QueryClientProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
