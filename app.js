const express = require("express");
const booksRouter = express.Router();
const authorsRouter = express.Router();
const loginRouter = express.Router();
const signupRouter = express.Router();
const addbookRouter = express.Router();
const addauthorRouter = express.Router();
const port = process.env.PORT || 5014;


//init express
const app = new express();

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.use(express.static('./public'));

var booklist = [
    {
    title:"Jane Eyre",
    author:"Charlotte Bronte",
    genre:"Bildungsroman",
    img:"Jane Eyre-Charlotte Bronte.jpg",
    authorimg:"Charlotte Bronte.jpg",
    authorinfo:"Charlotte Bronte (21 April 1816 – 31 March 1855) was an English novelist and poet, the eldest of the three Brontë sisters who survived into adulthood and whose novels became classics of English literature.",
    info:"Jane Eyre is a Bildungsroman which follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall."

},
{
    title:"The Alchemist ",
    author:"Paulo Coelho",
    genre:"Philosophy",
    img:"The Alchemist.jpg",
    authorimg:"Paulo Coelho.jpg",
    authorinfo:"Paulho Coelho (born 24 August 1947) is a Brazilian lyricist and novelist, best known for his novel The Alchemist. In 2014, he uploaded his personal papers online to create a virtual Paulo Coelho Foundation.",
    info:"How can you find your heart's desire?A world-wide phenomenon;an inspiration for anyone seeking their path in life"

},

{
    title:"The Catcher in the Rye",
    author:"J.D. Salinger",
    genre:"Coming of Age ",
    img:"the catcher in the Rye-J.D Salinger.jpg",
    authorimg:"J.D Salinger.jpg",
    authorinfo:"Jerome David Salinger ( January 1, 1919 – January 27, 2010) was an American writer best known for his 1951 novel The Catcher in the Rye. Before its publication, Salinger published several short stories in Story magazine and served in World War II. In 1948, his critically acclaimed story 'A Perfect Day for Bananafish' appeared in The New Yorker, which published much of his later work.The Catcher in the Rye was an immediate popular success. Salinger's depiction of adolescent alienation and loss of innocence in the protagonist Holden Caulfield was influential, especially among adolescent readers.The novel was widely read and controversial,and its success led to public attention and scrutiny. ",
    info:"The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It was originally intended for adults but is often read by adolescents for its themes of angst, alienation, and as a critique on superficiality in society. It has been translated widely. "

},
{
    title:"And the Mountains Echoed",
    author:"Khaled Hosseini",
    genre:"Novel",
    img:"And the mountains echoed- Khaled Hosseini 1.jpg",
    authorimg:"Khaled Hosseini.jpg",
    authorinfo:"Khaled Hosseini was born in Kabul, Afghanistan, and moved to the United States in 1980. He is the author of the New York Times bestsellers The Kite Runner, A Thousand Splendid Suns, and And the Mountains Echoed. Hosseini is also a U.S. Goodwill Envoy to the UNHCR, the UN Refugee Agency, and the founder of The Khaled Hosseini Foundation, a nonprofit that provides humanitarian assistance to the people of Afghanistan.",
    info:"An unforgettable novel about finding a lost piece of yourself in someone else. Khaled Hosseini, the #1 New York Times–bestselling author of The Kite Runner"
},
{
    title:"Little Women",
    author:"Louisa May Alcott",
    genre:"Coming of Age Novel",
    img:"little women 1.jpg",
    authorimg:"Louisa May Alcott.jpg",
    authorinfo:"Louisa May Alcott (November 29, 1832 – March 6, 1888) was an American novelist, short story writer and poet best known as the author of the novel Little Women (1868) and its sequels Little Men (1871) and Jo's Boys (1886).Raised in New England by her transcendentalist parents, Abigail May and Amos Bronson Alcott, she grew up among many of the well-known intellectuals of the day, such as Ralph Waldo Emerson, Nathaniel Hawthorne, Henry David Thoreau, and Henry Wadsworth Longfellow.",
    info:"Little Women is a coming-of-age novel written by American novelist Louisa May Alcott (1832–1888) which was originally published in two volumes in 1868 and 1869. Alcott wrote the book over several months at the request of her publisher."
}

]

//create your endpoints/route handlers
app.get('/',function(req,res){
    res.render("index", 
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log In'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Library',
        booklist
    });
});


booksRouter.get('/',function(req,res){
    res.render("books",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log In'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Library books',
        booklist
    
        
    });
});



booksRouter.get('/:id',function(req,res){   
    const id = req.params.id    
    res.render('book',{
            nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log In'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
            title:'Book info',
            book: booklist[id]
        });
        console.log("Single Book");
});

authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log In'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Authors',
        booklist        
    });
});

authorsRouter.get('/:id',function(req,res){   
    const id = req.params.id    
    res.render('author',{
            nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log In'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
            title:'Author info',
            book: booklist[id]
        });
        console.log("Single Author");
});


loginRouter.get('/',function(req,res){
    res.render("login",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log In'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Log In',
        booklist
                
    });
});

signupRouter.get('/',function(req,res){
    res.render("signup",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log In'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Sign Up'
                
    });
});

addbookRouter.get('/',function(req,res){
    res.render("addbook",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log in'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Add Book'
                
    });
});

addauthorRouter.get('/',function(req,res){
    res.render("addauthor",
    {
        nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'},{link:'/login',name:'Log In'},{link:'/signup',name:'Sign Up'},{link:'/addbook',name:'Add Book'},{link:'/addauthor',name:'Add Author'}],
        title:'Add Author'
                
    });
});
app.listen(port,()=>{console.log("Server Ready at " +port)});