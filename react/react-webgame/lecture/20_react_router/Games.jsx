import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import GameMatcher from "./GameMatcher"

const Games = () => {
    return(
        <BrowserRouter>
            <div>
                <Link to="/game/number-baseball?query=10&hello=zerocho">숫자야구</Link>
                &nbsp;
                <Link to="/game/rock-scissors-paper">가위바위보</Link>
                &nbsp;
                <Link to="/game/lotto-generator">로또</Link>
                &nbsp;
                <Link to="/game/index">게임 매쳐</Link>
            </div>
            <div>
                <Switch>
                    <Route path="/game/:name" render={(props) => <GameMatcher {...props}/>}></Route>
                    <Route path="/game/number-baseball"  render={(props) => <GameMatcher  {...props}/>}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Games;