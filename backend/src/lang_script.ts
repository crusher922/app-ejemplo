import {OpenAI} from "langchain";
import {RetrievalQAChain} from "langchain/chains";
import {PDFLoader} from "langchain/document_loaders/fs/pdf";
import {OpenAIEmbeddings} from "langchain/embeddings/openai";
import {MemoryVectorStore} from "langchain/vectorstores/memory";
import * as dotenv from "dotenv";
import {RecursiveCharacterTextSplitter} from "langchain/text_splitter"

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
    const loader2 = new PDFLoader(`/Dev/javascript/app-ejemplo/backend/uploads/${filename}`, {
        splitPages: false
    })

    const [doc1, doc2] = await Promise.all([loader.load(), loader2.load()]);
    const spliter = new RecursiveCharacterTextSplitter({
        chunkSize: 1500,
        chunkOverlap: 250
    })

    const docOutput1 = await spliter.splitDocuments(doc1);
    const docOutput2 = await spliter.splitDocuments(doc2);

    const vectorStore = await MemoryVectorStore.fromDocuments([...docOutput1, ...docOutput2], new OpenAIEmbeddings());
    const vectorStoreRetriever = vectorStore.asRetriever();
    const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);

    return await chain.call({
        query: question,
    });

    // const doc = await loader.load()
    // const docOutput = await spliter.splitDocuments(doc)
    // const vectorStore = await MemoryVectorStore.fromDocuments(docOutput, new OpenAIEmbeddings())
    // const vectorStoreRetriever = vectorStore.asRetriever()
    // const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
    // return await chain.call({
    //     query: question,
    // })
}
