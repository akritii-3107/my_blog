import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";
const ArticlePage = () => {
    const [articleInfo , setArticleInfo ] = useState ({ upvotes :0,comments:[]});
    const { articleId }  = useParams();
    const {user, isLoading}=useUser();

    useEffect (() => {
        const loadArticleInfo = async () => {
            const response = await axios.get(`/api/articles/${articleId}`);
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();
    }, [articleId]);

    const addupvote = async () => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`);
        const updatedArticle = response.data;
        setArticleInfo(updatedArticle);
    }

    const article = articles.find(article => article.name === articleId);

    if(!article)
    {
        return <NotFoundPage/>
    }
    return (
        <>
        <h1>{article.title}</h1>
        <div className="upvotes-section">
         {user ? <button onClick={addupvote}>Upvote</button> : <button>Login to upvote</button>}   
        </div>
        <p>
            This article has {articleInfo.upvotes} upvote(s) </p>
        {article.content.map( (paragraph,i) => (<p key={i}>{paragraph}</p>))}
        { user ?         <AddCommentForm
         articleName={articleId}
         onArticleUpdated={updatedArticle => setArticleInfo(updatedArticle)}>
         </AddCommentForm> :
         <button>Login to add comment</button>}

        <CommentsList comments={articleInfo.comments}></CommentsList>
        </>
    )

}
 
export default ArticlePage