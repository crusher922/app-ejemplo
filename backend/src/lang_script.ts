import {OpenAI} from "langchain";
import {RetrievalQAChain} from "langchain/chains";
import {PDFLoader} from "langchain/document_loaders/fs/pdf";
import {OpenAIEmbeddings} from "langchain/embeddings/openai";
import {MemoryVectorStore} from "langchain/vectorstores/memory";
import * as dotenv from "dotenv";

dotenv.config()
export const process_doc = async (filename: string | undefined, question: string) => {
    const apikey = process.env["OPENAI_API_KEY "]
    const model = new OpenAI({
        openAIApiKey: apikey,
        modelName: 'davinci-002'
    });
    const loader = new PDFLoader(`/Dev/javascript/app-ejemplo/backend/uploads/${filename}`, {
        splitPages: false
    })
    const doc = await loader.load()
    const vectorStore = await MemoryVectorStore.fromDocuments(doc, new OpenAIEmbeddings())
    const vectorStoreRetriever = vectorStore.asRetriever()
    const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
    return await chain.call({
        query: question,
    })
}
