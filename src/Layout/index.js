import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Switch, Route } from "react-router-dom";
import Study from "../Card/Study";
import AddCard from "../Card/AddCard";
import EditCard from "../Card/EditCard";
import DeckList from "../Deck/DeckList";
import Deck from "../Deck/Deck";
import CreateDeck from "../Deck/CreateDeck";
import EditDeck from "../Deck/EditDeck";
import Breadcrumb from "./Breadcrumb";

function Layout() {
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
            <Route exact path="/">
                <DeckList />
            </Route>
            <Route path="/decks/new">
                <Breadcrumb crumbs={["Home", "Create Deck"]}/>
                <CreateDeck />
            </Route>
            <Route exact path="/decks/:deckId">
                <Deck />
            </Route>
            <Route path="/decks/:deckId/study">
                <Study />
            </Route>
            <Route path="/decks/:deckId/edit">
                <EditDeck />
            </Route>
            <Route path="/decks/:deckId/cards/new">
                <AddCard />
            </Route>
            <Route path="/decks/:deckId/cards/:cardId/edit">
                <EditCard />
            </Route>
            <NotFound />
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
