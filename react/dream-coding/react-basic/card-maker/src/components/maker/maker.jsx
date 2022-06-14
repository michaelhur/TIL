import React, {useEffect, useState, useCallback} from 'react';
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
    const onLogout = useCallback(
        () => {
            authService.logout();
        },
        [authService],
    );

    useEffect(() => {
        if(!userId){
            return;
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        })
        return () => {stopSync()}
    }, [userId, cardRepository])

    useEffect(() => {
        authService.onAuthChange(user => {
            if(user){
                setUserId(user.uid);
            } else {
                navigate('/')
            }
        })
    }, [authService, userId, navigate])

    const addCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated
        });
        cardRepository.saveCard(userId, card);
    }

    const updateCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated
        })
        cardRepository.saveCard(userId, card);
    }

    const deleteCard = (card) => {
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id]
            return updated
        })
        cardRepository.removeCard(userId, card);
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