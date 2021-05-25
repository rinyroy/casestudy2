const express = require("express");

const authorsRouter = express.Router();
function router(nav){
    var booklist = [
        {
        title:"Jane Eyre",
        author:"Charlotte Bronte",
        genre:"Bildungsroman",
        image:"Jane Eyre-Charlotte Bronte.jpg",
        authorimg:"Charlotte Bronte.jpg",
        authorinfo:"Charlotte Bronte (21 April 1816 – 31 March 1855) was an English novelist and poet, the eldest of the three Brontë sisters who survived into adulthood and whose novels became classics of English literature.",
        info:"Jane Eyre is a Bildungsroman which follows the experiences of its eponymous heroine, including her growth to adulthood and her love for Mr. Rochester, the brooding master of Thornfield Hall."
    
    },
    {
        title:"The Alchemist ",
        author:"Paulo Coelho",
        genre:"Philosophy",
        image:"The Alchemist.jpg",
        authorimg:"Paulo Coelho.jpg",
        authorinfo:"Paulho Coelho (born 24 August 1947) is a Brazilian lyricist and novelist, best known for his novel The Alchemist. In 2014, he uploaded his personal papers online to create a virtual Paulo Coelho Foundation.",
        info:"How can you find your heart's desire?A world-wide phenomenon;an inspiration for anyone seeking their path in life"
    
    },
    
    {
        title:"The Catcher in the Rye",
        author:"J.D. Salinger",
        genre:"Coming of Age ",
        image:"the catcher in the Rye-J.D Salinger.jpg",
        authorimg:"J.D Salinger.jpg",
        authorinfo:"Jerome David Salinger ( January 1, 1919 – January 27, 2010) was an American writer best known for his 1951 novel The Catcher in the Rye. Before its publication, Salinger published several short stories in Story magazine and served in World War II. In 1948, his critically acclaimed story 'A Perfect Day for Bananafish' appeared in The New Yorker, which published much of his later work.The Catcher in the Rye was an immediate popular success. Salinger's depiction of adolescent alienation and loss of innocence in the protagonist Holden Caulfield was influential, especially among adolescent readers.The novel was widely read and controversial,and its success led to public attention and scrutiny. ",
        info:"The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It was originally intended for adults but is often read by adolescents for its themes of angst, alienation, and as a critique on superficiality in society. It has been translated widely. "
    
    },
    {
        title:"And the Mountains Echoed",
        author:"Khaled Hosseini",
        genre:"Novel",
        image:"And the mountains echoed- Khaled Hosseini 1.jpg",
        authorimg:"Khaled Hosseini.jpg",
        authorinfo:"Khaled Hosseini was born in Kabul, Afghanistan, and moved to the United States in 1980. He is the author of the New York Times bestsellers The Kite Runner, A Thousand Splendid Suns, and And the Mountains Echoed. Hosseini is also a U.S. Goodwill Envoy to the UNHCR, the UN Refugee Agency, and the founder of The Khaled Hosseini Foundation, a nonprofit that provides humanitarian assistance to the people of Afghanistan.",
        info:"An unforgettable novel about finding a lost piece of yourself in someone else. Khaled Hosseini, the #1 New York Times–bestselling author of The Kite Runner"
    },
    {
        title:"Little Women",
        author:"Louisa May Alcott",
        genre:"Coming of Age Novel",
        image:"little women 1.jpg",
        authorimg:"Louisa May Alcott.jpg",
        authorinfo:"Louisa May Alcott (November 29, 1832 – March 6, 1888) was an American novelist, short story writer and poet best known as the author of the novel Little Women (1868) and its sequels Little Men (1871) and Jo's Boys (1886).Raised in New England by her transcendentalist parents, Abigail May and Amos Bronson Alcott, she grew up among many of the well-known intellectuals of the day, such as Ralph Waldo Emerson, Nathaniel Hawthorne, Henry David Thoreau, and Henry Wadsworth Longfellow.",
        info:"Little Women is a coming-of-age novel written by American novelist Louisa May Alcott (1832–1888) which was originally published in two volumes in 1868 and 1869. Alcott wrote the book over several months at the request of her publisher."
    }
    
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Authors',
            booklist        
        });
    });
    
    authorsRouter.get('/:id',function(req,res){   
        const id = req.params.id    
        res.render('author',{
                nav,
                title:'Author info',
                book: booklist[id]
            });
            console.log("Single Author");
    });
    
    return authorsRouter;
}

module.exports = router;
