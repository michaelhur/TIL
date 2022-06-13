import React, {useEffect, useState} from 'react';
import styles from "./maker.module.css"
import {useLocation, useNavigate} from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({FileInput, authService, cardRepository}) => {
    const location = useLocation();
    const locationState = location?.state;
    const [cards, setCards] = useState({})
    const [userId, setUserId] = useState(locationState && locationState.id)

    const navigate = useNavigate();
    const onLogout = () => {
        authService.logout();
    }

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user){
                setUserId(user.uid);
            } else {
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
                    FileInput={FileInput}
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