import React, {useEffect, useState} from 'react';
import styles from "./maker.module.css"
import {useLocation, useNavigate} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({authService}) => {
    const [cards, setCards] = useState({
        "1": {
            id: "1",
            name: "Elle",
            company: "Samsung",
            theme: "dark",
            title: "Software Engineer",
            email: "ellie@gmail.com",
            message: "go for it",
            fileName: "ellie",
            fileURL: "ellie.png"
        },
        "2": {
            id: "2",
            name: "Mike",
            company: "LinkStarter",
            theme: "light",
            title: "Software Engineer",
            email: "mike.hur@gmail.com",
            message: "go for it",
            fileName: "mike",
            fileURL: null
        },
        "3": {
            id: "3",
            name: "Son",
            company: "Tottenham",
            theme: "light",
            title: "Football Player",
            email: "son@gmail.com",
            message: "Son for the Team of the Year",
            fileName: "son",
            fileURL: "son.png"
        }
    })


    const { state } = useLocation();
    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if(!user){
                navigate('/')
            }
        })
    })

    const addCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated
        })
    }

    const updateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated
        })
    }

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id]
            return updated
        })
    }

    return (
        <section className={styles.maker}>
            <Header onLogout={onLogout}/>
            <div className={styles.container}>
                <Editor
                    cards={cards}
                    addCard={addCard}
                    updateCard={updateCard}
                    deleteCard={deleteCard}
                />
                <Preview cards={cards}/>
            </div>
            <Footer />
        </section>
    );
}

export default Maker;