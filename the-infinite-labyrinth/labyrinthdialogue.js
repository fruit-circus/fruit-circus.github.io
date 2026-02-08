//TABLE OF CONTENTS
//stymieDialogue
//ladderDialogue
//haveYouSeenThisMan
//haventSeenHim
//shuriEncounter
//randomBook
//itsaDeadEnd
//whoopsThatWasTooFast
//noLongerFucked
//weGotTheGreenSwitch

//hoistingYou
//scarletSpottedSnickerBeetle
//liftRoomDialogue
//heyCanYouHitTheButtonsThisTime
//itsAPipeSegment
//redSwitchDialogue
//undergroundLake
//itsASpareHandle
//looksLikeTheDisplayIsOff
//verilyIsBurningAShrub

//verilyIdleDialogue
//signDialogue
//wouldASwordHelp
//niceACode
//looksLikeTheresAnEnvelopeInTheChandelier
//applySwordToRope
//whyPipe
//takeCupcake
//takeMacaroniPipe
//takeTeddyBear

//inspectSink
//selectTable
//trueMutualismGo
//modernArt
//secretPaintingPassage
//secretPaintingPassageStairs
//sixteenFeralRacoons
//wasntThereAShrubHere
//butWedGetAllWet
//youdonthavetostandthere

//goodWorkTeam
//itsLockedSauna
//ahStillLocked
//ahISee
//itsLockedSecond
//itsLocked
//thatWasEasy
//betterTakeTheseToo
//unlocking
//unlockingSecond

//tooHeavyTooKeys
//tooHeavy
//testingTheWaters
//wouldARopeBridgeHelp
//ropeToss
//ropeToss2
//northLocked
//tooFar
//deeperInWeGo
//shrub1

//shrub2
//itsAFlowerPot
//workingTogether
//isSummerSuspicious
//thatWasNotThereASecondAgo
//itsSomeSortOfPanelInTheWall
//onwardsAndInwards
//areWeFucked
//comingBackIntoTheSquareLiftRoomAfterBridgeCut
//successfullyPlacedPipeDialogue

//weNeedAPipeSegmentThatWillFitThisGap
//itsASecretMessageInAStrangeLanguage
//strangePaintingsConvo
//thatsNotRight
//nowTheyMatchMatch
//itWontBudge
//illLeaveYouHere
//illLeaveYouHereKodalyInput
//takeCareOfBrunhilda
//goodChoiceOfName

//iDontThinkICanFitThroughThat
//noPowerFlowing
//willUnlockForColor
//willUnlockForColorFlowers
//itsAnArbalest
//arbalestAttack
//iDontThinkThatsAGoodIdeaRightNow
//weShouldRestFirst
//iwentup
//iWonderWhatElseThisThingCanDo

//strangeAndMysteriousVial
//theresAPassageToTheSouth
//karakKyalMadeTheLabyrinthAndMagicIsReal
//shallWeCallItADay
//weShouldSealTheDoor
//shelfBooks
//shelfStones
//cantAllFitInThatBoat
//verilyIsMakingTea
//campingStove

//itsSomeVialsIGuess
//solveVialsPuzzle
//theresAHiddenDoorHere
//iDontThinkEitherOfUsAreSkinnyEnoughToFit
//verilyYouGoIntoTheMysteriousCrack
//verilyWhatDidYouSee
//moreRockDialogue

//event.key === 'Enter' should match travel = true


//i sure hope stymie doesn't misrepresent any information
function stymieDialogue() {
 if (current.room === "lobby") {
      
    if (!dialogue.hobbyists) {
        stmigo.play();
        dialogue.blockArrowTravel = true;
        h1.style.display = "block";
        st.style.display = "block";
        dialogue.hobbyists = 1;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.hobbyists === 1) {
        h1.style.display = "none";
        h2.style.display = "block";
        k.style.display = "block";
        st.style.display = "none";
        dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 2) {
        h2.style.display = "none";
        h3.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 3) {
        h3.style.display = "none";
        h4.style.display = "block";
        kn.style.display = "block";
        b.style.display = "none"; //same budget
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 4) {
        h4.style.display = "none";
        h5.style.display = "block";
        st.style.display = "block";
        kn.style.display = "none";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 5) {
        h5.style.display = "none";
        h6.style.display = "block";
        b.style.display = "block";
        st.style.display = "none";
        dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 6) {
        h6.style.display = "none";
        h7.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 7) {
        h7.style.display = "none";
        h8.style.display = "block";
        b.style.display = "block";
        k.style.display = "none"; //kodaly!!
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 8) {
        h8.style.display = "none";
        h9.style.display = "block";
        k.style.display = "block";
        b.style.display = "none"; //what? it's true
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 9) {
        h9.style.display = "none";
        h10.style.display = "block";
        kn.style.display = "block";
        k.style.display = "none";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 10) {
        h10.style.display = "none";
        h11.style.display = "block";
        kn.style.display = "none";
        ksa.style.display = "block";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 11) {
        h11.style.display = "none";
        h12.style.display = "block";
        k.style.display = "block";
        ksa.style.display = "none";
        dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 12) {
        h12.style.display = "none";
        h13.style.display = "block";
        st.style.display = "block";
        k.style.display = "none";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 13) {
        h13.style.display = "none";
        h14.style.display = "block";
        st.style.display = "block";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 14) {
        h14.style.display = "none";
        h15.style.display = "block";
        br3.style.display = "block";
        st.style.display = "none";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 15) {
        h15.style.display = "none";
        h16.style.display = "block";
        k3.style.display = "block";
        br3.style.display = "none";
        dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 16) {
        h16.style.display = "none";
        k3.style.display = "none";
        dialogue.hobbyists = true;
        dialogue.blockArrowTravel = false;
        decreaseNotification();
        denotifnoise.play();
        document.cookie = "hobby=hobby";
      }
  }
}); 
    }
    //stymie's sauna convo
    else if (dialogue.saunaKeyTried && !lobby2.achieved) {
        stmigo.play();
        b1.style.display = "block";
       k.style.display = "block";
       dialogue.blockArrowTravel = true;
       dialogue.saunaSeen = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.saunaSeen === 1) {
       b1.style.display = "none";
       b2.style.display = "block";
       st.style.display = "block";
       k.style.display = "none";
       dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 2) {
       b2.style.display = "none";
       b3.style.display = "block";
       k.style.display = "block";
       st.style.display = "none";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 3) {
       b3.style.display = "none";
       b4.style.display = "block";
       st.style.display = "block";
       k.style.display = "none"; //Normally, but no data cube
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 4) {
       b4.style.display = "none";
       b5.style.display = "block";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 5) {
       b5.style.display = "none";
       b6.style.display = "block";
       b.style.display = "block";
       st.style.display = "none";
       dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 6) {
       b6.style.display = "none";
       b7.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 7) {
       b7.style.display = "none";
       b8.style.display = "block";
       st.style.display = "none";
       stt.style.display = "block";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 8) {
       b8.style.display = "none";
       b9.style.display = "block";
       bs.style.display = "block";
       stt.style.display = "none"; //a soldier!?
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 9) {
       b9.style.display = "none";
       b10.style.display = "block";
       st.style.display = "block";
       bs.style.display = "none";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 10) {
       b10.style.display = "none";
       b11.style.display = "block";
       ks.style.display = "block";
       st.style.display = "none";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 11) {
       b11.style.display = "none";
       b12.style.display = "block";
       st.style.display = "block";
       ks.style.display = "none"; //possibly
       dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 12) {
       b12.style.display = "none";
       b13.style.display = "block";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 13) {
       b13.style.display = "none";
       b14.style.display = "block";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 14) {
       b14.style.display = "none";
       b15.style.display = "block";
       stt.style.display = "block";
       st.style.display = "none";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 15) {
       b15.style.display = "none";
       b16.style.display = "block";
       st.style.display = "block";
       stt.style.display = "none";
       dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 16) {
       b16.style.display = "none";
       b17.style.display = "block";
       k.style.display = "block";
       st.style.display = "none";      
        dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 17) {
       b17.style.display = "none";
       k.style.display = "none";
       dialogue.saunaKeyTried = false;
       dialogue.dataCubeIsAThingWeKnowAbout = true;
       dialogue.saunaSeen = false;
       dialogue.blockArrowTravel = false;
       decreaseNotification();
       denotifnoise.play();
       dialogue.datacube = false;
       document.cookie = "roguesoldier=roguesoldier";
     }
 } });
    }
    //found stymie's missing cube
    else if (!dialogue.datacubeFound && dialogue.dataCubeIsAThingWeKnowAbout) {
        y1.style.display = "block";
        dialogue.blockArrowTravel = true;
        stmigo.play();
      b.style.display = "block"; //Stymie! We found your missing data cube!
      dialogue.saunaDisabling = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.saunaDisabling === 1) {
     y1.style.display = "none";
     y2.style.display = "block";
      st.style.display = "block";
      b.style.display = "none";
      dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 2) {
     y2.style.display = "none";
     y3.style.display = "block";
        dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 3) {
     y3.style.display = "none";
     y4.style.display = "block";
     sal.style.display = "block";
     st.style.display = "none";
        dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 4) {
     y4.style.display = "none";
     y5.style.display = "block";
     sal.style.display = "block";
        dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 5) {
     y5.style.display = "none";
     y6.style.display = "block";
     stgra.style.display = "block";
     sal.style.display = "none";
      dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 6) {
     y6.style.display = "none";
     y7.style.display = "block";
     stgra.style.display = "none";
     strag.style.display = "block";
        dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 7) {
     y7.style.display = "none";
     y8.style.display = "block"; //Great! It should be safe to use the sauna now.
     strag.style.display = "none";
     st.style.display = "block";
        dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 8) {
     y8.style.display = "none";
     y9.style.display = "block";
      st.style.display = "none"; //Let's check it out.
      b.style.display = "block";
        dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 9) {
     y9.style.display = "none";
     b.style.display = "none";
        dialogue.saunaDisabling = true;
        dialogue.datacubeFound = true;
        dialogue.blockArrowTravel = false;
        dialogue.hrrg = false;
        decreaseNotification();
        denotifnoise.play();
        water.zappy = false;
        dropDataCube();
    }
 }
});
   } else if (!dialogue.datacubeFound && !dialogue.dataCubeIsAThingWeKnowAbout) {
        //stymie we found this weird cube
         yb1.style.display = "block";
        stmigo.play();
        dialogue.blockArrowTravel = true;
      b.style.display = "block";
      dialogue.saunaDisabling2 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.saunaDisabling2 === 1) {
     yb1.style.display = "none";
     yb2.style.display = "block";
      st.style.display = "block";
      b.style.display = "none";
      dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 2) {
     yb2.style.display = "none";
     yb3.style.display = "block";
        dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 3) {
     yb3.style.display = "none";
     yb4.style.display = "block";
     sal.style.display = "block";
     st.style.display = "none";
        dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 4) {
     yb4.style.display = "none";
     yb5.style.display = "block";
     sal.style.display = "block";
        dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 5) {
     yb5.style.display = "none";
     yb6.style.display = "block";
     stgra.style.display = "block";
     sal.style.display = "none";
      dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 6) {
     yb6.style.display = "none";
     yb7.style.display = "block";
     stgra.style.display = "none";
     strag.style.display = "block";
        dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 7) {
     yb7.style.display = "none";
     yb8.style.display = "block";
     strag.style.display = "none";
     st.style.display = "block";
        dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 8) {
     yb8.style.display = "none";
     yb9.style.display = "block";
      st.style.display = "none"; //Let's check it out.
      b.style.display = "block";
        dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 9) {
     yb9.style.display = "none";
     b.style.display = "none";
        dialogue.saunaDisabling2 = true;
        dialogue.saunaDisabling = true;
        dialogue.datacubeFound = true;
        dialogue.blockArrowTravel = false;
        dialogue.hrrg = false;
        decreaseNotification();
        denotifnoise.play();
        water.zappy = false;
        dropDataCube();
    }
 }
});
   }
    else if (!dialogue.disparateFragment && !dialogue.longTimeNoSeeSee) { //won't trigger if they've been to lobby two
           //no idea what's back there
        stmigo.play();
       a1.style.display = "block";
       b.style.display = "block";
       dialogue.blockArrowTravel = true;
       dialogue.disparateFragment = 1;
       document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.disparateFragment === 1) {
       a1.style.display = "none";
       a2.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
       dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 2) {
       a2.style.display = "none";
       a3.style.display = "block";
       stt.style.display = "block";
       st.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 3) {
       a3.style.display = "none";
       a4.style.display = "block";
       st.style.display = "block";
       stt.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 4) {
       a4.style.display = "none";
       a5.style.display = "block";
       stt.style.display = "block";
       st.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 5) {
       a5.style.display = "none";
       a6.style.display = "block";
       stsu.style.display = "block";
       stt.style.display = "none";
       dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 6) {
       a6.style.display = "none";
       a7.style.display = "block";
       k.style.display = "block"; //i had no idea that was possible...
       stsu.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 7) {
       a7.style.display = "none";
       a8.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 8) {
       a8.style.display = "none";
       a9.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 9) {
       a9.style.display = "none";
       a10.style.display = "block";
       st.style.display = "none";
       stw.style.display = "block";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 10) {
       a10.style.display = "none";
       a11.style.display = "block";
       st.style.display = "block";
       stw.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 11) {
       a11.style.display = "none";
       st.style.display = "none";
       dialogue.disparateFragment = true;
       dialogue.blockArrowTravel = false;
       document.cookie = "fragment=fragment";
       decreaseNotification();
       denotifnoise.play();
        }
  }
});} else if (!dialogue.candlesHintConvoFinished && dialogue.nothingCandlesHappened == 2 && !alcove.solved && dialogue.yellowCandlesPickedUp && dialogue.greenCandlesPickedUp && dialogue.violetCandlesPickedUp && dialogue.redCandlesPickedUp) { 
  //if: attempted to unlock the panel + has not unlocked the panel + has taken all the candles
      stymieGivesCandleHint();
      //mark potential problem: gets stuck on this one because the first condition has not changed
    }
//stymie actually misrepresents something breifly
    else if (!dialogue.labyrinthNames) {
        stmigo.play();
        dialogue.blockArrowTravel = true;
        zj1.style.display = "block";
        st.style.display = "block";
        dialogue.labyNames = 1;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.labyNames === 1) {
        zj1.style.display = "none";
        zj1a.style.display = "block";
        st.style.display = "none";
        b.style.display = "block";
        dialogue.labyNames = 1111;
          return;
      } else if (dialogue.labyNames === 1111) {
        zj1a.style.display = "none";
        zj2.style.display = "block";
        b.style.display = "none";
        st.style.display = "block";
        dialogue.labyNames = 2;
          return;
      } else if (dialogue.labyNames === 2) {
        zj2.style.display = "none";
        zj3.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 3) {
        zj3.style.display = "none";
        zj4.style.display = "block";
        k.style.display = "block";
        st.style.display = "none";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 4) {
        zj4.style.display = "none";
        zj5.style.display = "block";
        k.style.display = "none";
        b.style.display = "block"; //TIM?
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 5) {
        zj5.style.display = "none";
        zj6.style.display = "block";
        b.style.display = "none";
        st.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 6) {
        zj6.style.display = "none";
        zj7.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 7) {
        zj7.style.display = "none";
        zj8.style.display = "block";
        bf.style.display = "block"; //fainted
        st.style.display = "none";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 8) {
        zj8.style.display = "none";
        zj9.style.display = "block";
        st.style.display = "block";
        bf.style.display = "none";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 9) {
        zj9.style.display = "none";
        zj10.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 10) {
        zj10.style.display = "none";
        zj11.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 11) {
        zj11.style.display = "none";
        zj12.style.display = "block";
        st.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 12) {
        zj12.style.display = "none";
        zj13.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 13) {
        zj13.style.display = "none";
        zj14.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 14) {
        zj14.style.display = "none";
        zj15.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 15) {
        zj15.style.display = "none";
        zj16.style.display = "block";
        st.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 16) {
        zj16.style.display = "none";
        zj17.style.display = "block";
        st.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 17) {
        zj17.style.display = "none";
        zj18.style.display = "block";
        st.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 18) {
        zj18.style.display = "none";
        zj19.style.display = "block";
        st.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 19) {
        zj19.style.display = "none";
        zj20.style.display = "block";
        st.style.display = "none";
        k.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 20) {
        zj20.style.display = "none";
        k.style.display = "none";
        dialogue.labyNames = true;
        dialogue.labyrinthNames = true;
        dialogue.blockArrowTravel = false;
        decreaseNotification();
        denotifnoise.play();
      }
  }
});
    }
    //any luck finding the data cube?
    else if (!dialogue.datacube && !dialogue.anyLuck && !key.gold && !dialogue.hrrg && !dialogue.datacubehasbeenfound) {
        stmigo.play();
      m1.style.display = "block";
      st.style.display = "block";
      dialogue.blockArrowTravel = true;
      dialogue.anyLuck = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.anyLuck === 1) {
     m1.style.display = "none";
     m2.style.display = "block";
      k.style.display = "block"; //any luck?
      st.style.display = "none";
      dialogue.anyLuck++;
        return;
    } else if (dialogue.anyLuck === 2) {
     m2.style.display = "none";
     m3.style.display = "block";
      st.style.display = "block";
      k.style.display = "none";
        dialogue.anyLuck++;
        return;
    } else if (dialogue.anyLuck === 3) {
     m3.style.display = "none";
      st.style.display = "none"; //keep me posted!
      dialogue.anyLuck = true;
      dialogue.blockArrowTravel = false;
        return;
        }
    }
});
} else if (dialogue.longTimeNoSeeSee) {
    stmigo.play();
        zv1.style.display = "block";
        st3.style.display = "block"; //hey guys, long time no see!
       dialogue.longTimeNoSee = 1;
       dialogue.blockArrowTravel = true;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.longTimeNoSee === 1) {
       zv1.style.display = "none";
       zv2.style.display = "block";
       kstu.style.display = "block";
       st3.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 2) {
       zv2.style.display = "none";
       zv3.style.display = "block";
       kstu.style.display = "none";
       st.style.display = "block";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 3) {
       zv3.style.display = "none";
       zv4.style.display = "block";
       st.style.display = "none";
       stt.style.display = "block";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 4) {
       zv4.style.display = "none";
       zv5.style.display = "block";
       stt.style.display = "none";
       st.style.display = "block";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 5) {
       zv5.style.display = "none";
       zv6.style.display = "block";
       k.style.display = "block";
       st.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 6) {
       zv6.style.display = "none";
       zv7.style.display = "block";
       k.style.display = "none";
       st.style.display = "block";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 7) {
       zv7.style.display = "none";
       zv8.style.display = "block";
       k.style.display = "block";
       st.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 8) {
       zv8.style.display = "none";
       zv9.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 9) {
       zv9.style.display = "none";
       zv10.style.display = "block";
       b.style.display = "block";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 10) {
       zv10.style.display = "none";
       zv11.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 11) {
       zv11.style.display = "none";
       zv16.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 12) {
       zv16.style.display = "none";
       zv17.style.display = "block";
       sal.style.display = "block";
       b.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 13) {
       zv17.style.display = "none";
       zv18.style.display = "block";
       stlight.style.display = "block";
       sal.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 14) {
       zv18.style.display = "none";
       zv19.style.display = "block";
       st.style.display = "block";
       stlight.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 15) {
       zv19.style.display = "none";
       zv20.style.display = "block";
       st.style.display = "block";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 16) {
        zv20.style.display = "none";
        zv21.style.display = "block";
        st.style.display = "block";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 17) {
        zv21.style.display = "none";
        zv22.style.display = "block";
        k.style.display = "block";
        st.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 18) {
       zv22.style.display = "none";
       zv23.style.display = "block";
       ksl.style.display = "block";
       k.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 19) {
       zv23.style.display = "none";
       zv24.style.display = "block";
       b.style.display = "block";
       ksl.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 20) {
       zv24.style.display = "none";
       zv25.style.display = "block";
       k.style.display = "block"; //unless she's a soldier too
       b.style.display = "none";
              dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 21) {
       zv25.style.display = "none";
       zv26.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 22) {
       zv26.style.display = "none";
       zv27.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
                dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 23) {
       zv27.style.display = "none";
       zv28.style.display = "block";
       k.style.display = "block";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 24) {
       zv28.style.display = "none";
       zv29.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 25) {
       zv29.style.display = "none";
       zv30.style.display = "block";
       b.style.display = "block";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 26) {
       zv30.style.display = "none";
       zv31.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 27) {
       zv31.style.display = "none";
       zv32.style.display = "block";
       b.style.display = "block";
       st.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     }  else if (dialogue.longTimeNoSee === 28) {
       zv32.style.display = "none";
       b.style.display = "none";
       st.style.display = "none";
       document.cookie = "longtime=longtime";
       dialogue.longTimeNoSee = true;
       dialogue.longTimeNoSeeSee = false;
       dialogue.longTimeNoSeeComplete = true;
        dialogue.workingTogether = true;
        dialogue.getASignalOut = true;
        dialogue.gumpus = true;
        dialogue.actionAndInformation = true;
        dialogue.blockArrowTravel = false;
        verilyIs.inThePortholeRoom = true;
        verilysprite.style.display = "block";
        terminal2.style.display = "block";
        vtamp1.style.display = "none";
        vtamp2.style.display = "none";
        vtamp3.style.display = "none";
        decreaseNotification();
        denotifnoise.play();
        increaseNotificationLobbyTwo();
     }
 }
});

} //you can add new lobby 1 stymie dialogue here
    }
    //verily confrontation
    else if (current.room === "lobbyTwo") {
        if (!dialogue.verilyIntro) {
        zk1.style.display = "block";
        dialogue.blockArrowTravel = true;
        b.style.display = "block";
        vtamp1.style.display = "none";
        vtamp2.style.display = "block";
       dialogue.verilyIntro = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.verilyIntro === 1) {
       zk1.style.display = "none";
       zk2.style.display = "block";
       b.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 2) {
       zk2.style.display = "none";
       zk3.style.display = "block";
       stg.style.display = "block";
       stmigifhelper.style.display = "block";
       b.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 3) {
       zk3.style.display = "none";
       zk4.style.display = "block";
       stg.style.display = "none";
       vsup.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 4) {
       zk4.style.display = "none";
       zk5.style.display = "block";
       vsup.style.display = "none";
       vdm.style.display = "block";
       vtamp2.style.display = "none";
        vtamp3.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 5) {
       zk5.style.display = "none";
       zk6.style.display = "block";
       vdm.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 6) {
       zk6.style.display = "none";
       zk7.style.display = "block";
       v.style.display = "block";
       vdm.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 7) {
       zk7.style.display = "none";
       zk8.style.display = "block";
       k.style.display = "block";
       v.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 8) {
       zk8.style.display = "none";
       zk9.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 9) {
       zk9.style.display = "none";
       zk10.style.display = "block";
       b.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 10) {
       zk10.style.display = "none";
       zk11.style.display = "block";
       k.style.display = "block"; //who are you
       b.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 11) {
       zk11.style.display = "none";
       zk12.style.display = "block"; //im summer verily
       vhap.style.display = "block";
       k.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 12) {
       zk12.style.display = "none";
       zk13.style.display = "block";
       k.style.display = "block";
       vhap.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 13) {
       zk13.style.display = "none";
       zk14.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 14) {
       zk14.style.display = "none";
       zk15.style.display = "block";
       v.style.display = "block";
       b.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 15) {
       zk15.style.display = "none";
       zk16.style.display = "block";
       k.style.display = "block";
       v.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 16) {
       zk16.style.display = "none";
       zk17.style.display = "block";
       k.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 17) {
       zk17.style.display = "none";
       zk18.style.display = "block"; //i have a knack for puzzles
       v.style.display = "block";
       k.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 18) {
       zk18.style.display = "none";
       zk19.style.display = "block";
       stg.style.display = "block";
       
       v.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 19) {
       zk19.style.display = "none";
       zk20.style.display = "block";
       stg.style.display = "none";
       
       kstu.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 20) {
        zk20.style.display = "none";
        zk21.style.display = "block";
        stg.style.display = "block"; //that's me
       kstu.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 21) {
        zk21.style.display = "none";
        zk22.style.display = "block";
        kstu.style.display = "block";
        
       stg.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 22) {
       zk22.style.display = "none";
       zk23.style.display = "block";
       v.style.display = "block";
       kstu.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 23) {
       zk23.style.display = "none";
       zk24.style.display = "block";
       vrel.style.display = "block";
       v.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 24) {
       zk24.style.display = "none";
       zk25.style.display = "block";
       v.style.display = "block";
       vrel.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 25) {
       zk25.style.display = "none";
       zk26.style.display = "block";
       stg.style.display = "block";
       
       v.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 26) {
       zk26.style.display = "none";
       zk27.style.display = "block";
       stg.style.display = "block";
       
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 27) {
       zk27.style.display = "none";
       zk28.style.display = "block";
       stlag.style.display = "block";
       stg.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 28) {
       zk28.style.display = "none";
       zk28b.style.display = "block";
       stlag.style.display = "block";
         dialogue.verilyIntro = "pickles";
         return;
     } else if (dialogue.verilyIntro === "pickles") {
       zk28b.style.display = "none";
       zk29.style.display = "block";
       stlag.style.display = "none";
       v.style.display = "block";
         dialogue.verilyIntro = 29;
         return;
     } else if (dialogue.verilyIntro === 29) {
       zk29.style.display = "none";
       zk30.style.display = "block";
       st.style.display = "block";
       v.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 30) {
       zk30.style.display = "none";
       zk31.style.display = "block";
       st.style.display = "block";
       stmigifhelper.style.display = "none";
       v.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 31) {
       zk31.style.display = "none";
       zk32.style.display = "block";
       st.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 32) {
       zk32.style.display = "none";
       zk33.style.display = "block";
       st.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 33) {
       zk33.style.display = "none";
       zk34.style.display = "block";
       st.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 34) {
       zk34.style.display = "none";
       zk35.style.display = "block";
       st.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 35) {
       zk35.style.display = "none";
       zk36.style.display = "block";
       st.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 36) {
       zk36.style.display = "none";
       zk37.style.display = "block";
       st.style.display = "none";
       v.style.display = "block"; //you're welcome
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 37) {
       zk37.style.display = "none";
       zk38.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 38) {
       zk38.style.display = "none";
       zk39.style.display = "block";
       b.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 39) {
        zk39.style.display = "none";
        zk40.style.display = "block";
       vrel.style.display = "block";
       b.style.display = "none";
       dialogue.verilyIntro++;
         return;
     }
     else if (dialogue.verilyIntro === 40) {
        zk40.style.display = "none";
        zk41.style.display = "block";
        vrel.style.display = "none";
        v.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 41) {
       zk41.style.display = "none";
       zk42.style.display = "block";
       v.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 42) {
       zk42.style.display = "none";
       zk43.style.display = "block";
       v.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 43) {
       zk43.style.display = "none";
       zk44.style.display = "block";
       v.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 44) {
       zk44.style.display = "none";
       zk45.style.display = "block";
       v.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 45) {
       zk45.style.display = "none";
       zk46.style.display = "block";
       v.style.display = "none";
       vrel.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 46) {
       zk46.style.display = "none";
       zk47.style.display = "block";
       k.style.display = "block";
       vrel.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 47) {
       zk47.style.display = "none";
       zk48.style.display = "block";
       k.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 48) {
       zk48.style.display = "none";
       zk49.style.display = "block";
       v.style.display = "block";
       k.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 49) {
       zk49.style.display = "none";
       zk50.style.display = "block";
       v.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 50) {
       zk50.style.display = "none";
       v.style.display = "none";
       dialogue.verilyIntro = true;
       document.cookie = "verily=verily";
        dialogue.longTimeNoSeeSee = true;
        dialogue.blockArrowTravel = false;
        notifnoise.play();
        increaseNotification(); //ready for Long time no see in lobby1
         return;
     }
 }
});

        } else if (dialogue.actionAndInformation && !dialogue.actionAndInformationComplete) {
        zy1.style.display = "block";
        stmigo.play();
        dialogue.blockArrowTravel = true;
        st.style.display = "block";
       dialogue.actionAndInformationIncrimenter = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.actionAndInformationIncrimenter === 1) {
       zy1.style.display = "none";
       zy2.style.display = "block";
       st.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 2) {
       zy2.style.display = "none";
       zy3.style.display = "block";
       k.style.display = "block"; //what?
       st.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 3) {
       zy3.style.display = "none";
       zy4.style.display = "block";
       k.style.display = "none";
       st.style.display = "block"; // i said did you
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 4) {
       zy4.style.display = "none";
       zy5.style.display = "block";
       st.style.display = "none";
       k.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 5) {
       zy5.style.display = "none";
       zy6.style.display = "block";
       k.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 6) {
       zy6.style.display = "none";
       zy7.style.display = "block";
       st.style.display = "block";
       k.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 7) {
       zy7.style.display = "none";
       zy8.style.display = "block";
       k.style.display = "block";
       st.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 8) {
       zy8.style.display = "none";
       zy9.style.display = "block";
       stt.style.display = "block"; 
       k.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 9) {
       zy9.style.display = "none";
       zy10.style.display = "block";
       st.style.display = "block"; //i see the confusion
       stt.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 10) {
       zy10.style.display = "none";
       zy11.style.display = "block";
       st.style.display = "block";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 11) {
       zy11.style.display = "none";
       zy12.style.display = "block";
       st3.style.display = "block";
       st.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 12) {
       zy12.style.display = "none";
       zy13.style.display = "block";
       k.style.display = "block"; //im lost
       st3.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 13) {
       zy13.style.display = "none";
       zy14.style.display = "block";
       stsu.style.display = "block";
       k.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 14) {
       zy14.style.display = "none";
       zy15.style.display = "block";
       stsu.style.display = "block";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 15) {
       zy15.style.display = "none";
       zy16.style.display = "block";
       stt.style.display = "block";
       stsu.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 16) {
       zy16.style.display = "none";
       zy17.style.display = "block";
       st.style.display = "block";
       stt.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 17) {
       zy17.style.display = "none";
       zy18.style.display = "block";
       st.style.display = "none";
       stt.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 18) {
       zy18.style.display = "none";
       zy19.style.display = "block";
       stdem.style.display = "block";
       stt.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 19) {
       zy19.style.display = "none";
       zy20.style.display = "block";
       stmigifhelper.style.display = "block";
       stdem2.style.display = "block";
       stdem.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 20) {
        zy20.style.display = "none";
        zysidebar.style.display = "block";
        stmigifhelper.style.display = "block";
        b.style.display = "block"; //huh
        stdem2.style.display = "none";
        dialogue.actionAndInformationIncrimenter++;
         return;
     }  else if (dialogue.actionAndInformationIncrimenter === 21) {
        zysidebar.style.display = "none";
        zy21.style.display = "block";
        stmigifhelper.style.display = "none";
        b.style.display = "block"; //so...
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 22) {
        zy21.style.display = "none";
        zy22.style.display = "block";
        st.style.display = "block"; //oops, that was misleading
       b.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 23) {
       zy22.style.display = "none";
       zy23.style.display = "block";
       st.style.display = "none";
       b.style.display = "block";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 24) {
       zy23.style.display = "none";
       zy24.style.display = "block";
       sal.style.display = "block";
       b.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 25) {
       zy24.style.display = "none";
       zy25.style.display = "block";
       stw.style.display = "block";
       sal.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 26) {
       zy25.style.display = "none";
       zy26.style.display = "block";
       b.style.display = "block";
       stw.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 27) {
       zy26.style.display = "none";
       zy27.style.display = "block";
       stw.style.display = "block"; //why would i do that?
       b.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 28) {
       zy27.style.display = "none";
       zy28.style.display = "block";
       k.style.display = "block";
       stw.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 29) {
       zy28.style.display = "none";
       zy29.style.display = "block";
       k.style.display = "none";
       stsu.style.display = "block";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 30) {
       zy29.style.display = "none";
       zy30.style.display = "block";
       b.style.display = "block"; //maybe we're acsking the wrong quesotin 
       stsu.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 31) {
       zy30.style.display = "none";
       zy31.style.display = "block";
       sal.style.display = "block";
       b.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 32) {
       zy31.style.display = "none";
       zy32.style.display = "block";
       b.style.display = "block";
       sal.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 33) {
       zy32.style.display = "none";
       zy33.style.display = "block";
       ksl.style.display = "block";
       b.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 34) {
       zy33.style.display = "none";
       zy34.style.display = "block";
       st.style.display = "block";
       ksl.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 35) {
       zy34.style.display = "none";
       zy35.style.display = "block";
       k.style.display = "block";
       st.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 36) {
       zy35.style.display = "none";
       zy36.style.display = "block";
       sal.style.display = "block";
       k.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 37) {
       zy36.style.display = "none";
       zy37.style.display = "block";
       sal.style.display = "none";
       b.style.display = "block"; //i'm sure
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 38) {
       zy37.style.display = "none";
       zy38.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 39) {
       zy38.style.display = "none";
       zy39.style.display = "block";
       st.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 40) {
        zy39.style.display = "none";
        zy40.style.display = "block";
        k.style.display = "block"; //typically 
        st.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     }
     else if (dialogue.actionAndInformationIncrimenter === 41) {
        zy40.style.display = "none";
        zy41.style.display = "block";
        st.style.display = "block";
        k.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 42) {
       zy41.style.display = "none";
       zy42.style.display = "block";
       st.style.display = "block";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 43) {
       zy42.style.display = "none";
       zy43.style.display = "block";
       st.style.display = "block";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 44) {
       zy43.style.display = "none";
       zy44.style.display = "block";
       st.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 45) {
       zy44.style.display = "none";
       zy45.style.display = "block";
       st.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 46) {
       zy45.style.display = "none";
       zy46.style.display = "block";
       st.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 47) {
       zy46.style.display = "none";
       zy47.style.display = "block";
       st.style.display = "none";
       kstu.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 48) {
       zy47.style.display = "none";
       zy48.style.display = "block";
       b.style.display = "block";
       kstu.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 49) {
       zy48.style.display = "none";
       b.style.display = "none";
       decreaseNotificationLobbyTwo();
       denotifnoise.play();
        dialogue.actionAndInformation = false;
        dialogue.trueMutualism = true;
        dialogue.verilyIsKnownToBeNotAtTheSTMITerminal = "true";
        document.cookie = "actionAndInfo=actionAndInfo";
        dialogue.actionAndInformationComplete = true;
        dialogue.actionAndInformationIncrimenter = true;
        dialogue.blockArrowTravel = false;
     }
 }
});

        } else if (!dialogue.haventSeenHim && !dialogue.workingTogether) {
            haventSeenHim();
            stmigo.play(); //only happens here in lobby 2 if k and b havent gone back to talk to 1st stymie, otherwise must happen when verily has shifted to the other room 
       
    } else if (dialogue.shuriComplete && dialogue.lostRogueSoldiers && !dialogue.stymieHasntSeenHim) {
        haveYouSeenThisMan();
        stmigo.play();
    }   
    
    //add new lobby 2 stymie dialogue here (with an else if (dialogue.conditions) {})
    } else if (current.room === "chandelierRoom") {
        looksLikeTheresAnEnvelopeInTheChandelier();
    } else if (current.room === "source1") {
        handleHandle1();
    }
        else if (current.room === "lobbyThree") {
          if (dialogue.youflippedOneSwitch && !dialogue.flippedOneStoneDialogueDone) {
            oneofthestones();
            dialogue.flippedOneStoneDialogueDone = true;
          }
        else if (!dialogue.enteringLobbyThree) {
            stmigo.play();
            dialogue.blockArrowTravel = true;
            yyb1.style.display = "block";
            k.style.display = "block";
            dialogue.intrepidExplorers = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.intrepidExplorers === 1) {
       yyb1.style.display = "none";
       yyb2.style.display = "block";
       st.style.display = "block";
       k.style.display = "none";
       dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 2) {
       yyb2.style.display = "none";
       yyb3.style.display = "block";
       k.style.display = "block";
       st.style.display = "none";
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 3) {
       yyb3.style.display = "none";
       yyb4.style.display = "block";
       k.style.display = "none";
       st.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 4) {
       yyb4.style.display = "none";
       yyb5.style.display = "block";
       b.style.display = "block";
       st.style.display = "none";
       dialogue.intrepidExplorers = 6;
         return;
     } else if (dialogue.intrepidExplorers === 6) {
       yyb5.style.display = "none";
       yyb7.style.display = "block";
              b.style.display = "none";
              st.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 7) {
       yyb7.style.display = "none";
       yyb8.style.display = "block";
       st.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 8) {
       yyb8.style.display = "none";
       yyb9.style.display = "block";
        st.style.display = "none"; 
        st3.style.display = "block"; 
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 9) {
       yyb9.style.display = "none";
       yyb10.style.display = "block";
       st3.style.display = "none"; 
        st.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 10) {
       yyb10.style.display = "none";
       yyb11.style.display = "block";
       st.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     }  else if (dialogue.intrepidExplorers === 11) {
       yyb11.style.display = "none";
       yyb12.style.display = "block";
       st.style.display = "none";
       st3.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     }  else if (dialogue.intrepidExplorers === 12) {
       yyb12.style.display = "none";
       yyb13.style.display = "block";
       st3.style.display = "none";
       stsu.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     }  else if (dialogue.intrepidExplorers === 13) {
       yyb13.style.display = "none";
       yyb14.style.display = "block";
       st.style.display = "block";
        stsu.style.display = "none";
         dialogue.intrepidExplorers++;
         return;
     }  else if (dialogue.intrepidExplorers === 14) {
       yyb14.style.display = "none";
       yyb14b.style.display = "block";
       st.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     }   else if (dialogue.intrepidExplorers === 15) {
       yyb14b.style.display = "none";
       yyb14c.style.display = "block";
       st.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 16) {
       yyb14c.style.display = "none";
       yyb15.style.display = "block";
       st.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     }  else if (dialogue.intrepidExplorers === 17) {
       yyb15.style.display = "none";
       yyb16.style.display = "block";
       st.style.display = "none";
       b.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     }  else if (dialogue.intrepidExplorers === 18) {
       yyb16.style.display = "none";
       yyb17.style.display = "block";
       b.style.display = "none";
       st.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     }  else if (dialogue.intrepidExplorers === 19) {
       yyb17.style.display = "none";
       yyb18.style.display = "block";
       st.style.display = "none";
       stsl.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     }  else if (dialogue.intrepidExplorers === 20) {
       yyb18.style.display = "none";
       yyb19.style.display = "block";
       st.style.display = "block";
       stsl.style.display = "none";
       dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 21) {
       yyb19.style.display = "none";
       yyb20.style.display = "block";
       st.style.display = "block";
         dialogue.intrepidExplorers = 22;
         return;
     } else if (dialogue.intrepidExplorers === 22) {
       yyb20.style.display = "none";
       yyb21.style.display = "block";
       st.style.display = "block";
         dialogue.intrepidExplorers = 24;
         return;
     } else if (dialogue.intrepidExplorers === 24) {
       yyb21.style.display = "none";
       yyb23.style.display = "block";
       st.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     }   else if (dialogue.intrepidExplorers === 25) {
       yyb23.style.display = "none";
       yyb24.style.display = "block";
       st.style.display = "none";
       stfl.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     }  else if (dialogue.intrepidExplorers === 26) {
       yyb24.style.display = "none";
       yyb25.style.display = "block";
       stfl.style.display = "none";
       b.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     }  else if (dialogue.intrepidExplorers === 27) {
       yyb25.style.display = "none";
       yyb26.style.display = "block";
       b.style.display = "none";
       stfl.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     }  else if (dialogue.intrepidExplorers === 28) {
       yyb26.style.display = "none";
       yyb27.style.display = "block";
       stfl.style.display = "none";
       b.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     }  else if (dialogue.intrepidExplorers === 29) {
       yyb27.style.display = "none";
       yyb28.style.display = "block";
       b.style.display = "none";
       st.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 30) {
       yyb28.style.display = "none";
       st.style.display = "none";
       document.cookie = "stymieLobbyThree=stymieLobbyThree";
        dialogue.enteringLobbyThree = true;
        dialogue.feralRacoons = true;
        decreaseNotificationLobbyThree();
        dialogue.blockArrowTravel = false;
        denotifnoise.play();
        dialogue.intrepidExplorers = false;
     }
    }});
        } else if (dialogue.signPost) {
            stmigo.play();
            dialogue.blockArrowTravel = true;
            yyc1.style.display = "block";
            b.style.display = "block";
            dialogue.signPost = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.signPost === 1) {
       yyc1.style.display = "none";
       yyc2.style.display = "block";
       b.style.display = "block";
       dialogue.signPost++;
         return;
     } else if (dialogue.signPost === 2) {
       yyc2.style.display = "none";
       yyc3.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
         dialogue.signPost++;
         return;
     } else if (dialogue.signPost === 3) {
       yyc3.style.display = "none";
       st.style.display = "none";
       denotifnoise.play();
       decreaseNotificationLobbyThree();
       dialogue.signPost = false;
       dialogue.blockArrowTravel = false;
     }
    }});
        } else if (dialogue.verilyisnowburningashrub && !dialogue.youshouldcheckin && !dialogue.verilyisnowburningashrubCheckForStymie) {
          stmigo.play();
          dialogue.blockArrowTravel = true;
          ybm1.style.display = "block";
          st.style.display = "block";
          dialogue.mightwanttocheck = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.mightwanttocheck === 1) {
        ybm1.style.display = "none";
        ybm2.style.display = "block";
        k.style.display = "block";
        st.style.display = "none";
        dialogue.mightwanttocheck++;
        return;
     } else if (dialogue.mightwanttocheck === 2) {
       ybm2.style.display = "none";
       ybm3.style.display = "block";
       st.style.display = "block";
       k.style.display = "none";
         dialogue.mightwanttocheck++;
         return;
     } else if (dialogue.mightwanttocheck === 3) {
       ybm3.style.display = "none";
       ybm4.style.display = "block";
       st.style.display = "none";
       ksl.style.display = "block";
         dialogue.mightwanttocheck++;
         return;
     } else if (dialogue.mightwanttocheck === 4) {
       ybm4.style.display = "none";
       ybm5.style.display = "block";
       st.style.display = "block";
       ksl.style.display = "none";
         dialogue.mightwanttocheck++;
         return;
     } else if (dialogue.mightwanttocheck === 5) {
       ybm5.style.display = "none";
       ybm6.style.display = "block";
       st.style.display = "none";
       st3.style.display = "block";
         dialogue.mightwanttocheck++;
         return;
     } else if (dialogue.mightwanttocheck === 6) {
       ybm6.style.display = "none";
       ybm7.style.display = "block";
       st3.style.display = "none";
       b.style.display = "block";
         dialogue.mightwanttocheck++;
         return;
     } else if (dialogue.mightwanttocheck === 7) {
       ybm7.style.display = "none";
       ybm8.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
         dialogue.mightwanttocheck++;
         return;
     } else if (dialogue.mightwanttocheck === 8) {
       ybm8.style.display = "none";
       ybm9.style.display = "block";
       stt.style.display = "block";
       st.style.display = "none";
         dialogue.mightwanttocheck++;
         return;
     } else if (dialogue.mightwanttocheck === 9) {
       ybm9.style.display = "none";
       ybm10.style.display = "block";
       st.style.display = "block";
       stt.style.display = "none";
         dialogue.mightwanttocheck++;
         return;
     } else if (dialogue.mightwanttocheck === 10) {
       ybm10.style.display = "none";
       ybm11.style.display = "block";
       st.style.display = "block";
         dialogue.mightwanttocheck++;
         return;
     } else if (dialogue.mightwanttocheck === 11) {
       ybm11.style.display = "none";
       ybm12.style.display = "block";
       st.style.display = "none";
       k.style.display = "block";
         dialogue.mightwanttocheck++;
         return;
     } else if (dialogue.mightwanttocheck === 12) {
       ybm12.style.display = "none";
       ybm13.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.mightwanttocheck++;
         return;
     } else if (dialogue.mightwanttocheck === 13) {
       ybm13.style.display = "none";
       b.style.display = "none";
       denotifnoise.play();
       decreaseNotificationLobbyThree();
       dialogue.mightwanttocheck = false;
       dialogue.blockArrowTravel = false;
       dialogue.youshouldcheckin = true;
     }
    }});
        } else if (dialogue.giveUsASecretPassageHint) { //completed the first conversation art history with only one click on the paintings, laying all the other pipes and other handles
          stmigo.play();
          dialogue.blockArrowTravel = true;
          ybh1.style.display = "block";
          st.style.display = "block";
          dialogue.needahintt = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.needahintt === 1) {
        ybh1.style.display = "none";
        ybh2.style.display = "block";
        k.style.display = "block";
        st.style.display = "none";
        dialogue.needahintt++;
        return;
     } else if (dialogue.needahintt === 2) {
        ybh2.style.display = "none";
        ybh3.style.display = "block";
        k.style.display = "block";
        st.style.display = "none";
        dialogue.needahintt++;
        return;
     } else if (dialogue.needahintt === 3) {
        ybh3.style.display = "none";
        ybh4.style.display = "block";
        st.style.display = "block";
        k.style.display = "none";
        dialogue.needahintt++;
        return;
     } else if (dialogue.needahintt === 4) {
        ybh4.style.display = "none";
        ybh5.style.display = "block";
        k.style.display = "block";
        st.style.display = "none";
        dialogue.needahintt++;
        return;
     } else if (dialogue.needahintt === 5) {
        ybh5.style.display = "none";
        ybh6.style.display = "block";
        st.style.display = "block";
        k.style.display = "none";
        dialogue.needahintt++;
        return;
     } else if (dialogue.needahintt === 6) {
        ybh6.style.display = "none";
        ybh7.style.display = "block";
        st.style.display = "block";
        k.style.display = "none";
        dialogue.needahintt++;
        return;
     } else if (dialogue.needahintt === 7) {
        ybh7.style.display = "none";
        ybh8.style.display = "block";
        st.style.display = "block";
        k.style.display = "none";
        dialogue.needahintt++;
        return;
     } else if (dialogue.needahintt === 8) {
        ybh8.style.display = "none";
        ybh9.style.display = "block";
        st.style.display = "block";
        k.style.display = "none";
        dialogue.needahintt++;
        return;
     } else if (dialogue.needahintt === 9) {
        ybh9.style.display = "none";
        st.style.display = "none";
        dialogue.needahintt = true;
        dialogue.hintHinted = true;
        dialogue.blockArrowTravel = false;
        decreaseNotificationLobbyThree();
        denotifnoise.play();
        return;
     }
    }});
        } else if (dialogue.numberOfArcadeFailures >= 4 && !dialogue.arcadeFailuresOne && !dialogue.needSomething) { //for testing set lower //change this number too
          stmigo.play();
          dialogue.blockArrowTravel = true;
          ybi1.style.display = "block";
          st.style.display = "block";
          dialogue.mighasdfsdftwanttosdfsdfcheck = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.mighasdfsdftwanttosdfsdfcheck === 1) {
        ybi1.style.display = "none";
        ybi2.style.display = "block";
        b.style.display = "block";
        st.style.display = "none";
        dialogue.mighasdfsdftwanttosdfsdfcheck++;
        return;
     } else if (dialogue.mighasdfsdftwanttosdfsdfcheck === 2) {
        ybi2.style.display = "none";
        ybi3.style.display = "block";
        b.style.display = "none";
        stsu.style.display = "block";
        dialogue.mighasdfsdftwanttosdfsdfcheck++;
        return;
     } else if (dialogue.mighasdfsdftwanttosdfsdfcheck === 3) {
        ybi3.style.display = "none";
        ybi4.style.display = "block";
        stsu.style.display = "none";
        b.style.display = "block";
        dialogue.mighasdfsdftwanttosdfsdfcheck++;
        return;
     } else if (dialogue.mighasdfsdftwanttosdfsdfcheck === 4) {
        ybi4.style.display = "none";
        ybi5.style.display = "block";
        b.style.display = "none";
        sthug.style.display = "block";
        dialogue.mighasdfsdftwanttosdfsdfcheck++;
        return;
     } else if (dialogue.mighasdfsdftwanttosdfsdfcheck === 5) {
        ybi5.style.display = "none";
        ybi6.style.display = "block";
        sthug.style.display = "none";
        sthug2.style.display = "block";
        dialogue.mighasdfsdftwanttosdfsdfcheck++;
        return;
     } else if (dialogue.mighasdfsdftwanttosdfsdfcheck === 6) {
        ybi6.style.display = "none";
        ybi7.style.display = "block";
        sthug2.style.display = "none";
        strag.style.display = "block";
        dialogue.mighasdfsdftwanttosdfsdfcheck++;
        return;
     } else if (dialogue.mighasdfsdftwanttosdfsdfcheck === 7) {
        ybi7.style.display = "none";
        ybi8.style.display = "block";
        strag.style.display = "none";
        st.style.display = "block";
        dialogue.mighasdfsdftwanttosdfsdfcheck++;
        return;
     } else if (dialogue.mighasdfsdftwanttosdfsdfcheck === 8) {
        ybi8.style.display = "none";
        ybi9.style.display = "block";
        sthug3.style.display = "block";
        dialogue.mighasdfsdftwanttosdfsdfcheck++;
        return;
     } else if (dialogue.mighasdfsdftwanttosdfsdfcheck === 9) {
        ybi9.style.display = "none";
        sthug3.style.display = "none";
        dialogue.mighasdfsdftwanttosdfsdfcheck = true;
        dialogue.stymieArcadeAlterations1 = true;
        dialogue.needSomething = true;
        dialogue.blockArrowTravel = false;
        decreaseNotificationLobbyThree();
        denotifnoise.play();
     }
    }});} else if (dialogue.arcadeFailuresOne && !dialogue.arcadeFailuresTwo && !dialogue.herProblem) {
          stmigo.play();
          dialogue.blockArrowTravel = true;
          ybj1.style.display = "block";
          b.style.display = "block";
          dialogue.cheese = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.cheese === 1) {
        ybj1.style.display = "none";
        ybj2.style.display = "block";
        strag.style.display = "block";
        b.style.display = "none";
        dialogue.cheese++;
        return;
     } else if (dialogue.cheese === 2) {
        ybj2.style.display = "none";
        ybj3.style.display = "block";
        stint.style.display = "block";
        strag.style.display = "none";
        dialogue.cheese++;
        return;
     } else if (dialogue.cheese === 3) {
        ybj3.style.display = "none";
        ybj4.style.display = "block";
        stfl.style.display = "block";
        stint.style.display = "none";
        dialogue.cheese++;
        return;
     } else if (dialogue.cheese === 4) {
        ybj4.style.display = "none";
        ybj5.style.display = "block";
        sal.style.display = "block";
        stfl.style.display = "none";
        dialogue.cheese++;
        return;
     } else if (dialogue.cheese === 5) {
        ybj5.style.display = "none";
        ybj6.style.display = "block";
        sal.style.display = "block";
        dialogue.cheese++;
        return;
     } else if (dialogue.cheese === 6) {
        ybj6.style.display = "none";
        sal.style.display = "none";
        dialogue.cheese = false;
        dialogue.stymieArcadeAlterations1 = false;
        dialogue.herProblem = true;
        dialogue.stymieArcadeAlterations2 = true;
        dialogue.blockArrowTravel = false;
        decreaseNotificationLobbyThree();
        denotifnoise.play();
     }
    }});
    } else if (dialogue.arcadeFailuresOne && dialogue.arcadeFailuresTwo && !dialogue.arcadeFailuresThree && !dialogue.takeThisItsDangerousToGoAlone) {
          stmigo.play();
          dialogue.blockArrowTravel = true;
          ybk1.style.display = "block";
          b.style.display = "block";
          dialogue.cheesecake = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.cheesecake === 1) {
        ybk1.style.display = "none";
        ybk2.style.display = "block";
        stsu.style.display = "block";
        b.style.display = "none";
        dialogue.cheesecake++;
        return;
     } else if (dialogue.cheesecake === 2) {
        ybk2.style.display = "none";
        ybk3.style.display = "block";
        stsu.style.display = "block";
        dialogue.cheesecake++;
        return;
     } else if (dialogue.cheesecake === 3) {
        ybk3.style.display = "none";
        ybk4.style.display = "block";
        stfl.style.display = "block";
        stsu.style.display = "none";
        dialogue.cheesecake++;
        return;
     } else if (dialogue.cheesecake === 4) {
        ybk4.style.display = "none";
        stfl.style.display = "none";
        batCard.style.display = "block";
        fanfare.play();
        dialogue.cheesecake++;
        return;
     } else if (dialogue.cheesecake === 5) {
        batCard.style.display = "none";
        takeBatFromBatCard(); //mark?
        dialogue.cheesecake = true;
        dialogue.stymieArcadeAlterations2 = false;
        dialogue.stymieArcadeAlterations3 = true;
        dialogue.blockArrowTravel = false;
        dialogue.arcadeFailuresThree = true;
        decreaseNotificationLobbyThree();
        denotifnoise.play();
        dialogue.takeThisItsDangerousToGoAlone = true;
     }
    }});
    }
     else if (dialogue.brunhildaIsInLobbyThree) { //mark test
            howsBunhilda();
          }
        //add new lobby 3 stymie dialogue here
    } else if (current.room === "gardenWest") {
        trueMutualismGo();
    }
}



//it's ladder dialogue
function ladderDialogue() {
  //advanceButt.style.display = "block";
    if (current.room === "lobby") {
        if (!dialogue.ladderDialogue) {
            dialogue.blockArrowTravel = true;
        zo1.style.display = "block";
        k.style.display = "block"; //we can't leave yet!
        dialogue.ladder = 1;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.ladder === 1) {
        zo1.style.display = "none";
        zo2.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 2) {
        zo2.style.display = "none";
        zo3.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
          dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 3) {
        zo3.style.display = "none";
        zo4.style.display = "block";
        k.style.display = "none";
        ksl.style.display = "block";
          dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 4) {
        zo4.style.display = "none";
        zo5.style.display = "block";
        kow.style.display = "block";
        ksl.style.display = "none";
          dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 5) {
        zo5.style.display = "none";
        zo6.style.display = "block";
        b.style.display = "block";
        kow.style.display = "none";
        dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 6) {
        zo6.style.display = "none";
        zo7.style.display = "block";
        kow.style.display = "block"; //is the player diagetic?
        b.style.display = "none";
          dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 7) {
        zo7.style.display = "none";
        zo8.style.display = "block";
        b.style.display = "block";
        kow.style.display = "none";
          dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 8) {
        zo8.style.display = "none";
        zo9.style.display = "block";
        b.style.display = "none";
        kow.style.display = "block";
          dialogue.ladder++;
          return;
        } else if (dialogue.ladder === 9) {
        zo9.style.display = "none";
        zo10.style.display = "block";
        kow.style.display = "none";
        ksl.style.display = "block";
          dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 10) {
        zo10.style.display = "none";
        zo11.style.display = "block";
        b.style.display = "block";
        ksl.style.display = "none";
        dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 11) {
        zo11.style.display = "none";
        b.style.display = "none";
        dialogue.ladderDialogue = true;
        dialogue.ladder22 = true;
        document.cookie = "ladder=ladder";
        dialogue.blockArrowTravel = false;
        advanceButt.style.display = "none";
        return;
      }
  }
}); 
//wow now it's really ladder dialogue
} else if (dialogue.ladder22) {
        zp1.style.display = "block";
        b.style.display = "block"; //can you clarify for the player what diagetic means?
        dialogue.ladder2 = 1;
        dialogue.blockArrowTravel = true;
        //advanceButt.style.display = "block";
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.ladder2 === 1) {
        zp1.style.display = "none";
        zp2.style.display = "block";
        b.style.display = "block";
        dialogue.ladder2++;
          return;
      } else if (dialogue.ladder2 === 2) {
        zp2.style.display = "none";
        zp3.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
          dialogue.ladder2++;
          return;
      } else if (dialogue.ladder2 === 3) {
        zp3.style.display = "none";
        zp4.style.display = "block";
        k.style.display = "none";
        btn.style.display = "block";
          dialogue.ladder2++;
          return;
      } else if (dialogue.ladder2 === 4) {
        zp4.style.display = "none";
        btn.style.display = "none";
          dialogue.ladder22 = false;
          document.cookie = "ladder2=ladder2";
          dialogue.blockArrowTravel = false;
          advanceButt.style.display = "none";
      } } });}
}
}



function haveYouSeenThisMan() { //stymie! have you misplaced any soldiers?
    if (dialogue.verilyIsKnownToBeNotAtTheSTMITerminal) {
        zzp1.style.display = "block";
       b.style.display = "block";
       dialogue.seenThisMan2 = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.seenThisMan2 === 1) {
        zzp1.style.display = "none";
        zzp2.style.display = "block";
       b.style.display = "none";
       st.style.display = "block";
       dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 2) {
       zzp2.style.display = "none";
       zzp3.style.display = "block";
       b.style.display = "block";
       st.style.display = "none";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 3) {
       zzp3.style.display = "none";
       zzp4.style.display = "block";
       b.style.display = "none";
       st.style.display = "block";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 4) {
       zzp4.style.display = "none";
       zzp5.style.display = "block";
       st.style.display = "none";
       k.style.display = "block";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 5) {
       zzp5.style.display = "none";
       zzp6.style.display = "block";
       k.style.display = "none";
       st.style.display = "block";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 6) {
       zzp6.style.display = "none";
       zzp7.style.display = "block";
       stt.style.display = "block";
       st.style.display = "none";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 7) {
       zzp7.style.display = "none";
       zzp8.style.display = "block";
       b.style.display = "block";
       stt.style.display = "none";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 8) {
       zzp8.style.display = "none";
       zzp9.style.display = "block";
       b.style.display = "none";
       st3.style.display = "block";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 9) {
       zzp9.style.display = "none";
       st3.style.display = "none";
       dialogue.lostRogueSoldiers = "false";
       dialogue.stymieHasntSeenHim = "true";
       decreaseNotificationLobbyTwo();
       dialogue.seenThisMan2 = true;
       denotifnoise.play();
     } 
}});
    } else {
        //if verily is not known to have left the terminal
        //wait where's verily?
       zzo1.style.display = "block";
       b.style.display = "block";
       dialogue.seenThisMan = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.seenThisMan === 1) {
        zzo1.style.display = "none";
        zzo2.style.display = "block";
       b.style.display = "none";
       st.style.display = "block";
       dialogue.seenThisMan++;
         return;
     } else if (dialogue.seenThisMan === 2) {
       zzo2.style.display = "none";
       zzo3.style.display = "block";
       b.style.display = "block";
       st.style.display = "none";
         dialogue.seenThisMan++;
         return;
     } else if (dialogue.seenThisMan === 3) {
       zzo3.style.display = "none";
       zzo4.style.display = "block";
       b.style.display = "none";
       st.style.display = "block";
         dialogue.seenThisMan++;
         return;
     } else if (dialogue.seenThisMan === 4) {
       zzo4.style.display = "none";
       zzo5.style.display = "block";
       st.style.display = "none";
       k.style.display = "block";
         dialogue.seenThisMan++;
         return;
     } else if (dialogue.seenThisMan === 5) {
       zzo5.style.display = "none";
       zzo6.style.display = "block";
       k.style.display = "none";
       st.style.display = "block";
         dialogue.seenThisMan++;
         return;
     } else if (dialogue.seenThisMan === 6) {
       zzo6.style.display = "none";
       zzo7.style.display = "block";
       st.style.display = "none";
       b.style.display = "block";
         dialogue.seenThisMan++;
         return;
     } else if (dialogue.seenThisMan === 7) {
       zzo7.style.display = "none";
       zzo8.style.display = "block";
       b.style.display = "none";
       st.style.display = "block";
         dialogue.seenThisMan++;
         return;
     }  else if (dialogue.seenThisMan === 8) {
       zzo8.style.display = "none";
       st.style.display = "none";
       dialogue.lostRogueSoldiers = false;
       dialogue.stymieHasntSeenHim = true;
       dialogue.forCookiesStymieHasntSeenHim = true;
       document.cookie = "alwaysMisplacing=alwaysMisplacing";
       decreaseNotificationLobbyTwo();
       dialogue.seenThisMan = true;
       denotifnoise.play();
     } 
}});}
}

function haventSeenHim() { //verily doesn't know what you're talking about
    zn1.style.display = "block";
       b.style.display = "block";
       dialogue.haventSeenHim = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.haventSeenHim === 1) {
       zn1.style.display = "none";
       zn2.style.display = "block";
       b.style.display = "none";
       v.style.display = "block";
       dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 2) {
       zn2.style.display = "none";
       zn3.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 3) {
       zn3.style.display = "none";
       zn4.style.display = "block";
       b.style.display = "none"; //anyone else?
       v.style.display = "block";
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 4) {
       zn4.style.display = "none";
       zn5.style.display = "block";
       v.style.display = "block";
       dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 5) {
       zn5.style.display = "none";
       zn6.style.display = "block";
       v.style.display = "block";
       dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 6) {
       zn6.style.display = "none";
       zn7.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 7) {
       zn7.style.display = "none";
       zn8.style.display = "block";
       b.style.display = "block";
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 8) {
       zn8.style.display = "none";
       zn9.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 9) {
       zn9.style.display = "none";
       zn10.style.display = "block";
       st.style.display = "block";
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 10) {
       zn10.style.display = "none";
       zn11.style.display = "block";
       st.style.display = "block"; 
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 11) {
       zn11.style.display = "none";
       zn12.style.display = "block"; 
       v.style.display = "block";
       st.style.display = "none";
       dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 12) {
       zn12.style.display = "none";
       zn13.style.display = "block";
       v.style.display = "block";
       dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 13) {
       zn13.style.display = "none";
       v.style.display = "none";
       dialogue.haventSeenHim = true;
       document.cookie = "haventSeenHim=haventSeenHim";
         return;
     } 
 }
});
}



function shuriEncounter() {
if (!chapterTwoPartTwo.activated && !dialogue.preventShuriCookies) {
  dialogue.dontAllowTableDialogueBecauseShuriBeingPursued = true;
    shurisprite.style.display = "block";
    dialogue.blockArrowTravel = true;
    lamano.pause();
    elmare.play();
    setTimeout(function() {startQueneNoteAfterElMare();}, 99000);
    chapterTwoPartTwo.activated = "true";
    dialogue.shuriEncounter = 1;
   zzn1.style.display = "block";
   b.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.shuriEncounter === 1) {
            dialogue.blockArrowTravel = true;
        zzn1.style.display = "none";
        zzn2.style.display = "block";
        b.style.display = "none";
        shuri.style.display = "block";
           dialogue.shuriEncounter++;
           return;
       } else if (dialogue.shuriEncounter === 2) {
            dialogue.blockArrowTravel = true;
        zzn2.style.display = "none";
        zzn3.style.display = "block";
           kstu.style.display = "block";
           shuri.style.display = "none";
           dialogue.shuriEncounter++;
       } else if (dialogue.shuriEncounter === 3) {
            dialogue.blockArrowTravel = true;
        zzn3.style.display = "none";
        zzn4.style.display = "block";
           shuri.style.display = "block";
           kstu.style.display = "none";
           shurisprite.style.display = "none";
           randomDoorAudio();
           dialogue.shuriEncounter++;
       } else if (dialogue.shuriEncounter === 4) {
            dialogue.blockArrowTravel = true;
        zzn4.style.display = "none";
        zzn5.style.display = "block";
           kflip2.style.display = "block"; //hey wait!
           shuri.style.display = "none";
           dialogue.shuriEncounter++;
       }  else if (dialogue.shuriEncounter === 5) {
        zzn5.style.display = "none";
           kflip2.style.display = "none";
           //this also triggers verily to move
           verilyIs.inThePortholeRoom = true;
        verilysprite.style.display = "block";
        terminal2.style.display = "block";
        vtamp1.style.display = "none";
        vtamp2.style.display = "none";
        vtamp3.style.display = "none";
           dialogue.chaseSequence = true;
           dialogue.haventSeenHim = true;
       document.cookie = "haventSeenHim=haventSeenHim";
       document.cookie = "shuriEncountered=shuriEncountered";
       dialogue.preventShuriCookies = true;
       dialogue.shuriHasBeenSeen = true;
       dialogue.blockArrowTravel = false;
       }
    }
});}
}



//library dialogue
function randomBook() {
  booksound.play();
    if (!bookTalk.initialdone) {
   dialogue.randombook = 1;
   zzl1.style.display = "block";
   ksta.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.randombook === 1) {
        zzl1.style.display = "none";
        zzl2.style.display = "block";
        ksta.style.display = "none";
        br3.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 2) {
        zzl2.style.display = "none";
        zzl3.style.display = "block";
           b.style.display = "block";
           br3.style.display = "none";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 3) {
        zzl3.style.display = "none";
        zzl4.style.display = "block";
           b.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 4) {
        zzl4.style.display = "none";
        zzl5.style.display = "block";
           b.style.display = "block";
           dialogue.randombook++;
           return;
       }  else if (dialogue.randombook === 5) {
        zzl5.style.display = "none";
        zzl6.style.display = "block";
        ks.style.display = "block";
        b.style.display = "none";
           dialogue.randombook++;
           return;
       }  else if (dialogue.randombook === 6) {
        zzl6.style.display = "none";
        zzl7.style.display = "block";
        ks.style.display = "none";
        b.style.display = "block";
           dialogue.randombook++;
           return;
       }  else if (dialogue.randombook === 7) {
        zzl7.style.display = "none";
        zzl8.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
           dialogue.randombook++;
           return;
       }   else if (dialogue.randombook === 8) {
        zzl8.style.display = "none";
        zzl9.style.display = "block";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 9) {
        zzl9.style.display = "none";
        zzl10.style.display = "block";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 10) {
        zzl10.style.display = "none";
        zzl11.style.display = "block";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 11) {
        zzl11.style.display = "none";
        zzl12.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 12) {
        zzl12.style.display = "none";
        zzl13.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 13) {
        zzl13.style.display = "none";
        zzl14.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 14) {
        zzl14.style.display = "none";
        zzl15.style.display = "block";
        b.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 15) {
        zzl15.style.display = "none";
        zzl16.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 16) {
        zzl16.style.display = "none";
        zzl17.style.display = "block";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 17) {
        zzl17.style.display = "none";
        zzl18.style.display = "block";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 18) {
        zzl18.style.display = "none";
        zzl19.style.display = "block";
        k.style.display = "none";
        kow.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 19) {
        zzl19.style.display = "none";
        zzl20.style.display = "block";
        ksl.style.display = "block";
        kow.style.display = "none";
        dialogue.randombook++;
           return; 
    } else if (dialogue.randombook === 20) {
        zzl20.style.display = "none";
        zzl21.style.display = "block";
        ksl.style.display = "none";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       }  else if (dialogue.randombook === 21) {
        zzl21.style.display = "none";
        zzl22.style.display = "block";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       }  else if (dialogue.randombook === 22) {
        zzl22.style.display = "none";
        zzl23.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 23) {
        zzl23.style.display = "none";
        zzl24.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       }  else if (dialogue.randombook === 24) {
        zzl24.style.display = "none";
        k.style.display = "none";
        bookTalk.initialdone = true;
        bookTalk.second = true;
           return;
       }
   }
}
);
} else if (bookTalk.second) {
    dialogue.readnonsense = 1;
   zzm1.style.display = "block";
   b.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.readnonsense === 1) {
        zzm1.style.display = "none";
        zzm2.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
           dialogue.readnonsense++;
           return;
       } else if (dialogue.readnonsense === 2) {
        zzm2.style.display = "none";
        zzm3.style.display = "block";
           b.style.display = "block";
           dialogue.readnonsense++;
           return;
       } else if (dialogue.readnonsense === 3) {
        zzm3.style.display = "none";
        zzm3aa.style.display = "block";
           k.style.display = "block";
           b.style.display = "none";
           dialogue.readnonsense++;
           return;
       } else if (dialogue.readnonsense === 4) {
        zzm3aa.style.display = "none";
           k.style.display = "none";
           bookTalk.second = false;
           bookTalk.patternSpells = true;
           return;
       }
    }});} else if (bookTalk.patternSpells) {
        dialogue.readnonsense22 = 1;
   zzm3a.style.display = "block";
   kstu.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.readnonsense22 === 1) {
        zzm3a.style.display = "none";
        zzm3b.style.display = "block";
        kstu.style.display = "block";
           dialogue.readnonsense22++;
           return;
       } else if (dialogue.readnonsense22 === 2) {
        zzm3b.style.display = "none";
        zzm3c.style.display = "block";
        kstu.style.display = "none";
        k.style.display = "block";
        dialogue.readnonsense22++;
           return;
       } else if (dialogue.readnonsense22 === 3) {
        zzm3c.style.display = "none";
        zzm3d.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.readnonsense22++;
           return;
       } else if (dialogue.readnonsense22 === 4) {
        zzm3d.style.display = "none";
        zzm3e.style.display = "block";
        b.style.display = "block";
        dialogue.readnonsense22++;
           return;
       }  else if (dialogue.readnonsense22 === 5) {
        zzm3e.style.display = "none";
        zzm3f.style.display = "block";
        b.style.display = "block";
        dialogue.readnonsense22++;
           return;
       }  else if (dialogue.readnonsense22 === 6) {
        zzm3f.style.display = "none";
        zzm3g.style.display = "block";
        b.style.display = "block";
        dialogue.readnonsense22++;
           return;
       }  else if (dialogue.readnonsense22 === 7) {
        zzm3g.style.display = "none";
        zzm3h.style.display = "block";
        b.style.display = "none";
        kside.style.display = "block";
        dialogue.readnonsense22++;
           return;
       } else if (dialogue.readnonsense22 === 8) {
        zzm3h.style.display = "none";
        kside.style.display = "none";
        bookTalk.patternSpells = false;
        bookTalk.third = true;
       }
    }});
} else if (bookTalk.third) {
        dialogue.readnonsense2 = 1;
   zzm4.style.display = "block";
   b.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.readnonsense2 === 1) {
        zzm4.style.display = "none";
        zzm5.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
           dialogue.readnonsense2++;
           return;
       } else if (dialogue.readnonsense2 === 2) {
        zzm5.style.display = "none";
        zzm6.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
        dialogue.readnonsense2++;
           return;
       } else if (dialogue.readnonsense2 === 3) {
        zzm6.style.display = "none";
        zzm7.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.readnonsense2++;
           return;
       } else if (dialogue.readnonsense2 === 4) {
        zzm7.style.display = "none";
        zzm8.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.readnonsense2++;
           return;
       }  else if (dialogue.readnonsense2 === 5) {
        zzm8.style.display = "none";
        zzm9.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.readnonsense2++;
           return;
       }  else if (dialogue.readnonsense2 === 6) {
        zzm9.style.display = "none";
        zzm10.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.readnonsense2++;
           return;
       }  else if (dialogue.readnonsense2 === 7) {
        zzm10.style.display = "none";
        zzm11.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.readnonsense2++;
           return;
       }  else if (dialogue.readnonsense2 === 8) {
        zzm11.style.display = "none";
        zzm12.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.readnonsense2++;
           return;
       } else if (dialogue.readnonsense2 === 9) {
        zzm12.style.display = "none";
        k.style.display = "none";
        bookTalk.third = false;
        bookTalk.fourth = true;
        return;
       }
    }});
} else if (bookTalk.fourth) {
    dialogue.readnonsense3 = 1;
   zzm13.style.display = "block";
   k.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.readnonsense3 === 1) {
        zzm13.style.display = "none";
        zzm14.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
           dialogue.readnonsense3++;
           return;
       } else if (dialogue.readnonsense3 === 2) {
        zzm14.style.display = "none";
        zzm15.style.display = "block";
        b.style.display = "block";
        dialogue.readnonsense3++;
           return;
       } else if (dialogue.readnonsense3 === 3) {
        zzm15.style.display = "none";
        zzm16.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.readnonsense3++;
           return;
       } else if (dialogue.readnonsense3 === 4) {
        zzm16.style.display = "none";
        zzm17.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.readnonsense3++;
           return;
       }  else if (dialogue.readnonsense3 === 5) {
        zzm17.style.display = "none";
        b.style.display = "none";
        bookTalk.fourth = false;
           return;
       } 
    }});
}
}

function itsaDeadEnd() {
if (dialogue.chaseChase && !dialogue.lobbythreeachieved) { //they've already checked one dead end, now a longer conversation
   dialogue.chaseComplete = 1;
   zzn8.style.display = "block";
   b.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.chaseComplete === 1) {
        zzn8.style.display = "none";
        zzn9.style.display = "block";
        kstu.style.display = "block";
        b.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 2) {
        zzn9.style.display = "none";
        zzn10.style.display = "block";
        b.style.display = "block";
        kstu.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 3) {
        zzn10.style.display = "none";
        zzn11.style.display = "block";
        kow.style.display = "block";
        b.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 4) {
        zzn11.style.display = "none";
        zzn12.style.display = "block";
        b.style.display = "block";
        kow.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 5) {
        zzn12.style.display = "none";
        zzn13.style.display = "block";
        kwtf.style.display = "block";
        b.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 6) {
        zzn13.style.display = "none";
        zzn14.style.display = "block";
        b.style.display = "block";
        kwtf.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 7) {
        zzn14.style.display = "none";
        zzn15.style.display = "block";
        b.style.display = "block";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 8) {
        zzn15.style.display = "none";
        zzn16.style.display = "block";
        b.style.display = "block";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 9) {
        zzn16.style.display = "none";
        zzn17.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 10) {
        zzn17.style.display = "none";
        k.style.display = "none";
        dialogue.chaseChase = false; //mark. test. was "false"
        dialogue.shuriComplete = "true"; //these are similarly incorrect
        dialogue.lostRogueSoldiers = "true"; //these are similarly incorrect
        increaseNotificationLobbyTwo();
        notifnoise.play();
        dialogue.chaseComplete = true;
        dialogue.dontAllowTableDialogueBecauseShuriBeingPursued = false;
        document.cookie = "wildSoldierChase=wildSoldierChase"
           return;
       }
}}); } else {
  if (!dialogue.deadendenddeadendedended) {
dialogue.chase = 1;
   zzn6.style.display = "block";
   b.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.chase === 1) {
        zzn6.style.display = "none";
        zzn7.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
           dialogue.chase++;
           return;
       } else if (dialogue.chase === 2) {
        zzn7.style.display = "none";
        k.style.display = "none";
        dialogue.chaseChase = true;
        dialogue.deadendenddeadendedended = true;
       }
}});
  }
    
}
}


function whoopsThatWasTooFast() {
 if (!dialogue.whoopsTooFasties) {
            v1.style.display = "block";
            bd.style.display = "block";  //Whoops! That was fast. Are you okay down there?
            dialogue.whoopsTooFast = 1;
            document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
        if (dialogue.whoopsTooFast === 1) {
            v1.style.display = "none";
            v2.style.display = "block"; //peachy keen
            k.style.display = "block";
            bd.style.display = "none";
            dialogue.whoopsTooFast++;
            return;
        } else if (dialogue.whoopsTooFast === 2) {
            v2.style.display = "none";
            v3.style.display = "block";
            bd.style.display = "block";
            k.style.display = "none";
            dialogue.whoopsTooFast++;
            return;
        } else if (dialogue.whoopsTooFast === 3) {
            v3.style.display = "none";
            v4.style.display = "block";
            k.style.display = "block"; //locked hatch
            bd.style.display = "none";
            dialogue.whoopsTooFast++;
            return;
        } else if (dialogue.whoopsTooFast === 4) {
            v4.style.display = "none";
            v5.style.display = "block";
            bd.style.display = "block";
            k.style.display = "none";
            dialogue.whoopsTooFast++;
            return;
        } else if (dialogue.whoopsTooFast === 5) {
            v5.style.display = "none";
            v6.style.display = "block";
            bd.style.display = "block";
            k.style.display = "none";
            dialogue.whoopsTooFast++;
            return;
        }  else if (dialogue.whoopsTooFast === 6) {
            v6.style.display = "none";
            bd.style.display = "none";
            upArrow.style.display = "block";
            dialogue.whoopsTooFast = true;
            dialogue.whoopsTooFasties = true;
            document.cookie = "whoops=whoops;";
            return;
        }
        }});}
}



function noLongerFucked() {
    if (!dialogue.letsGetHisAss) {
        dialogue.gethisass = 1;
   yys1.style.display = "block";
   k.style.display = "block";
   dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.gethisass === 1) {
        yys1.style.display = "none";
        yys2.style.display = "block";
        k.style.display = "none";
        ka.style.display = "block";
           dialogue.gethisass++;
           return;
       } else if (dialogue.gethisass === 2) {
        yys2.style.display = "none";
        yys3.style.display = "block";
        ka.style.display = "none";
        b.style.display = "block";
        dialogue.gethisass++;
       } else if (dialogue.gethisass === 3) {
        yys3.style.display = "none";
        b.style.display = "none";
        dialogue.gethisass = false;
        dialogue.letsGetHisAss = true;
        dialogue.blockArrowTravel = false;
        document.cookie = "soldiercutthebridge=soldiercutthebridge"

       }
    }});
    }
}



function weGotTheGreenSwitch() {
      yyt5.style.display = "block";
      b.style.display = "block";
      dialogue.dond = 1;
      document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.dond === 1) {
     yyt5.style.display = "none";
      b.style.display = "none";
        return;
    }}}); 
}

function hoistingYou() {
      v8.style.display = "block"; //ready for hoisting
      k.style.display = "block";
      dialogue.hoistMe = 1;
      document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.hoistMe === 1) {
     v8.style.display = "none";
     v9.style.display = "block"; 
      bd.style.display = "block"; 
      k.style.display = "none";
      dialogue.hoistMe++;
        return;
    } else if (dialogue.hoistMe === 2) {
     v9.style.display = "none";
      bd.style.display = "none"; 
      dialogue.hoistMe = true;
      document.body.style.background = "#f5f1e0"; //hex code back to beige
    current.room = "lift"
    mapmini.style.display = "block";
    lift.style.display = "block";
    liftBottom.style.display = "none";
    baseroom.style.display = "block";
    stonesound.play();
    platform.style.display = "block";
    klift.style.display = "block";
    firstLift.down = false;
    firstLift.neutral = true;
    dialogue.arrowUpWillRaiseLift = false;
    upArrow.style.display = "none";
      }}});
}

function scarletSpottedSnickerBeetle() {
    if (!dialogue.scarletSpottedSnicker) {
    dialogue.wifeandkids = 1;
   yyk10.style.display = "block";
   kwtf.style.display = "block";
   dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.wifeandkids === 1) {
        yyk10.style.display = "none";
        yyk11.style.display = "block";
        kwtf.style.display = "block";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 2) {
        yyk11.style.display = "none";
        yyk12.style.display = "block";
        kwtf.style.display = "block";
           dialogue.wifeandkids++;
           return;
       }  else if (dialogue.wifeandkids === 3) {
        yyk12.style.display = "none";
        yyk13.style.display = "block";
        b.style.display = "block";
        kwtf.style.display = "none";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 4) {
        yyk13.style.display = "none";
        yyk14.style.display = "block";
        kwtf.style.display = "block";
        b.style.display = "none";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 5) {
        yyk14.style.display = "none";
        yyk15.style.display = "block";
        b.style.display = "block";
        kwtf.style.display = "none";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 6) {
        yyk15.style.display = "none";
        yyk16.style.display = "block";
        bfur.style.display = "block";
        b.style.display = "none";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 7) {
        yyk16.style.display = "none";
        yyk17.style.display = "block";
        bfur.style.display = "block";
        b.style.display = "block";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 8) {
        yyk17.style.display = "none";
        yyk18.style.display = "block";
        b.style.display = "block";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 9) {
        yyk18.style.display = "none";
        yyk19.style.display = "block";
        b.style.display = "block";
           dialogue.wifeandkids++;
           return;
       }  else if (dialogue.wifeandkids === 10) {
        yyk19.style.display = "none";
        yyk20.style.display = "block";
        bfur.style.display = "block";
        b.style.display = "none";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 11) {
        yyk20.style.display = "none";
        bfur.style.display = "none";
           dialogue.wifeandkids = false;
           dialogue.scarletSpottedSnicker = true;
           dialogue.blockArrowTravel = false;
       }
    }});
}}


//entering the lift room
function liftRoomDialogue() {
    if (!dialogue.ohABigCircleOnTheGround) {
    if (!cookiesHas('liftroom')) {
    //triggered when going west from the lobby for the first time
    dialogue.firstTimeInTheLiftRoom = true;
    dialogue.blockArrowTravel = true;
    w1.style.display = "block";
      k.style.display = "block"; //What do you think this big circle does?
      dialogue.liftInvestigation = 1;
      document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.liftInvestigation === 1) {
     w1.style.display = "none";
     w2.style.display = "block"; //Whatever it is, I'm sure standing directly in the middle of it is sure to yield interesting results.
      b.style.display = "block"; 
      k.style.display = "none";
      dialogue.liftInvestigation++;
        return;
    } else if (dialogue.liftInvestigation === 2) {
     w2.style.display = "none";
     w3.style.display = "block";
      b.style.display = "block"; //Which is why I'm going to stand over here by these buttons.
        dialogue.liftInvestigation++;
        return;
    } else if (dialogue.liftInvestigation === 3) {
     w3.style.display = "none";
      b.style.display = "none";
      dialogue.liftInvestigation = true;
      document.cookie = "liftroom=liftroom;";
      dialogue.ohABigCircleOnTheGround = true;
      dialogue.blockArrowTravel = false;
    }
}});}}
}

function heyCanYouHitTheButtonsThisTime() {
   if (!dialogue.yourturn) {
    dialogue.heyitsyourturn = 1;
   yyt1.style.display = "block";
   b.style.display = "block";
   dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.heyitsyourturn === 1) {
        yyt1.style.display = "none";
        yyt2.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
           dialogue.heyitsyourturn++;
           return;
       } else if (dialogue.heyitsyourturn === 2) {
        yyt2.style.display = "none";
        yyt3.style.display = "block";
        k.style.display = "block";
           dialogue.heyitsyourturn++;
           return;
       }  else if (dialogue.heyitsyourturn === 3) {
        yyt3.style.display = "none";
        k.style.display = "none";
           dialogue.heyitsyourturn = true;
           dialogue.yourturn = true;
           explorers.style.display = "none";
    kbuttons.style.display = "block";
            bplatform.style.display = "block";
            dialogue.canyouhitthebuttonsthistime = true;
               dialogue.blockArrowTravel = false;
               document.cookie = "liftswitch=liftswitch"

   }}});}
   
}


function itsAPipeSegment() {
if (!dialogue.whyPipe && !dialogue.macaroniPipeSeen) {
    zzv1.style.display = "block"; //it's a pipe segment!
       k.style.display = "block";
       dialogue.goobleydooblyey = 1;
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.goobleydooblyey === 1) {
        zzv1.style.display = "none";
        zzv2.style.display = "block";
        k.style.display = "block";
       dialogue.goobleydooblyey++;
     } else if (dialogue.goobleydooblyey === 2) {
        zzv2.style.display = "none";
        k.style.display = "none";
        dialogue.blockArrowTravel = false;
     }
    }});
}
}


function redSwitchDialogue() {
    if (!dialogue.looksImportant) {
    //this looks important
    dialogue.thickLayerOfGlass = 1;
    dialogue.blockArrowTravel = true;
    if (dialogue.enteringLobbyThree) {
       yyo1.style.display = "block";
    } else {
      yyo1a.style.display = "block";
    }
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.thickLayerOfGlass === 1) {
        yyo1.style.display = "none";
        yyo1a.style.display = "none";
        k.style.display = "none";
        yyo2.style.display = "block";
        b.style.display = "block";
         dialogue.thickLayerOfGlass++;
         return;
     }  else if (dialogue.thickLayerOfGlass === 2) {
        yyo2.style.display = "none";
       b.style.display = "none";
       dialogue.blockArrowTravel = false;
       dialogue.thickLayerOfGlass = false;
       dialogue.looksImportant = true;
         return;
     } 
   }});} else if (dialogue.looksImportant && !dialogue.redSwitch && !dialogue.takeThisItsDangerousToGoAlone) {
    dialogue.thickLayerOfGlass2 = 1;
    dialogue.blockArrowTravel = true;
       yyo3.style.display = "block";
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.thickLayerOfGlass2 === 1) {
        yyo3.style.display = "none";
        k.style.display = "none";
        yyo4.style.display = "block";
        b.style.display = "block";
         dialogue.thickLayerOfGlass2++;
         return;
     }  else if (dialogue.thickLayerOfGlass2 === 2) {
        yyo4.style.display = "none";
       b.style.display = "none";
       dialogue.blockArrowTravel = false;
       dialogue.redSwitch = true;
       dialogue.thickLayerOfGlass2 = false;
     } 
   }});
   } 
    }

function undergroundLake() {
    if (!dialogue.undergroundLake) {
    dialogue.undergroundLake = 1;
    dialogue.blockArrowTravel = true;
       zz1.style.display = "block";
       knoba.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.undergroundLake === 1) {
        zz1.style.display = "none";
        knoba.style.display = "none";
        zz2.style.display = "block";
        bnoba.style.display = "block";
         dialogue.undergroundLake++;
         return;
     }  else if (dialogue.undergroundLake === 2) {
        zz2.style.display = "none";
       bnoba.style.display = "none";
         dialogue.undergroundLake = true;
         dialogue.blockArrowTravel = false;
        document.cookie = "undergroundLake=undergroundLake";
         return;
     } 
   }});
}}

function itsASpareHandle() {
    if (!(inventory.slot1 === "missing handle" || inventory.slot2 === "missing handle" || inventory.slot3 === "missing handle" || inventory.slot4 === "missing handle")) {
    dialogue.spareHandle = 1;
       yyh1.style.display = "block";
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.spareHandle === 1) {
        yyh1.style.display = "none";
        k.style.display = "none";
     }}});
}
}

function looksLikeTheDisplayIsOff() { //there's some sort of display screen behind the curtains... 2
   if (dialogue.displayFace) {
    dialogue.displayTerminal = 1;
       zr1.style.display = "block";
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.displayTerminal === 1) {
        zr1.style.display = "none";
        k.style.display = "none";
        zr2.style.display = "block";
        b.style.display = "block";
         dialogue.displayTerminal++;
         return;
     }  else if (dialogue.displayTerminal === 2) {
        zr2.style.display = "none";
        zr3.style.display = "block";
       b.style.display = "block";
         dialogue.displayTerminal++;
         return;
     } else if (dialogue.displayTerminal === 3) {
        zr3.style.display = "none";
        zr4.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.displayTerminal++;
         return;
     } else if (dialogue.displayTerminal === 4) {
        zr4.style.display = "none";
        zr5.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
         dialogue.displayTerminal++;
         return;
     } else if (dialogue.displayTerminal === 5) {
        zr5.style.display = "none";
        zr6.style.display = "block";
        kstu.style.display = "block";
        b.style.display = "none";
         dialogue.displayTerminal++;
         return;
     } else if (dialogue.displayTerminal === 6) {
        zr6.style.display = "none";
        kstu.style.display = "none";
        dialogue.displayTerminal = true;
        dialogue.displayFace2 = true;
        dialogue.displayFace = false;
         return;
     } 
   }});
   } else if (dialogue.displayFace2) { //there's some sort of display screen behind the curtains...
    dialogue.displaysafsdfFace = 1;
       zq1.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.displaysafsdfFace === 1) {
        zq1.style.display = "none";
       b.style.display = "none";
      dialogue.displaysafsdfFace = true;
       dialogue.displayFace2 = true;
     } 
   }});}
}       



function verilyIsBurningAShrub() {
 if (!dialogue.verilyfour) {
  verilyGo.play();
      yyp1.style.display = "block";
      v.style.display = "block";
      dialogue.verilyShruberies = 1;
      dialogue.blockArrowTravel = true;
       if (!dialogue.youshouldcheckin) {
          //they've not talked to stymie about stymie not knowing what verily is doing
          dialogue.verilyisnowburningashrubCheckForStymie = true;
          decreaseNotificationLobbyThree();
       }
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.verilyShruberies === 1) {
        yyp1.style.display = "none";
        yyp2.style.display = "block";
      v.style.display = "block";
      dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 2) {
        yyp2.style.display = "none";
        yyp3.style.display = "block";
        v.style.display = "none";
        ksul.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    }  else if (dialogue.verilyShruberies === 3) {
        yyp3.style.display = "none";
        yyp4.style.display = "block";
        ksul2.style.display = "block";
        ksul.style.display = "none";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 4) {
        yyp4.style.display = "none";
        yyp5.style.display = "block";
        ksul.style.display = "block";
        ksul2.style.display = "none";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 5) {
        yyp5.style.display = "none";
        yyp6.style.display = "block";
        kfreak.style.display = "block";
        ksul.style.display = "none";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 6) {
        yyp6.style.display = "none";
        yyp7.style.display = "block";
        v.style.display = "block"; //i wanted to confirm something
        kfreak.style.display = "none";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 7) {
        yyp7.style.display = "none";
        yyp8.style.display = "block";
        v.style.display = "none";
        b.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 8) {
        yyp8.style.display = "none";
        yyp9.style.display = "block";
        b.style.display = "none";
        v.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 9) {
        yyp9.style.display = "none";
        yyp10.style.display = "block";
        v.style.display = "none";
        bfur.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 10) {
        yyp10.style.display = "none";
        yyp11.style.display = "block";
                bfur.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 11) {
        yyp11.style.display = "none";
        yyp12.style.display = "block";
        bfur.style.display = "none";
        b.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 12) {
        yyp12.style.display = "none";
        yyp13.style.display = "block";
        b.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 13) {
        yyp13.style.display = "none";
        yyp14.style.display = "block";
        b.style.display = "none";
        v.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 14) {
        yyp14.style.display = "none";
        yyp15.style.display = "block";
        b.style.display = "none";
        v.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 15) {
        yyp15.style.display = "none";
        yyp16.style.display = "block";
        bfur.style.display = "block";
        v.style.display = "none";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 16) {
        yyp16.style.display = "none";
        yyp17.style.display = "block";
                bfur.style.display = "block";

        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 17) {
        yyp17.style.display = "none";
        yyp18.style.display = "block";
               bfur.style.display = "none";
                b.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 18) {
        yyp18.style.display = "none";
        yyp19.style.display = "block";
        b.style.display = "none";
        v.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 19) {
        yyp19.style.display = "none";
        v.style.display = "none";
        dialogue.verilyShruberies = true;
        dialogue.blockArrowTravel = false;
        dialogue.verilyfour = true;
        dialogue.verilyFive = true;
    } }});
  } else if (dialogue.verilyFive) {
    verilyGo.play();
        yyp21.style.display = "block";
      bfur.style.display = "block";
      dialogue.verilyShruberies2 = 10;
      dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.verilyShruberies2 === 10) {
        yyp21.style.display = "none";
        yyp22.style.display = "block";
       bfur.style.display = "none";
        b.style.display = "block";
        dialogue.verilyShruberies2++;
        return;
    } else if (dialogue.verilyShruberies2 === 11) {
        yyp22.style.display = "none";
        yyp23.style.display = "block";
                b.style.display = "block";

        dialogue.verilyShruberies2++;
        return;
    } else if (dialogue.verilyShruberies2 === 12) {
        yyp23.style.display = "none";
        yyp24.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.verilyShruberies2++;
        return;
    } else if (dialogue.verilyShruberies2 === 13) {
        yyp24.style.display = "none";
        yyp25.style.display = "block";
        k.style.display = "block";
        dialogue.verilyShruberies2++;
        return;
    } else if (dialogue.verilyShruberies2 === 14) {
        yyp25.style.display = "none";
        yyp26.style.display = "block";
         k.style.display = "none";
        v.style.display = "block";
        dialogue.verilyShruberies2++;
        return;
    } else if (dialogue.verilyShruberies2 === 15) {
        yyp26.style.display = "none";
        yyp27.style.display = "block";
                v.style.display = "block";

        dialogue.verilyShruberies2++;
        return;
    } else if (dialogue.verilyShruberies2 === 16) {
        yyp27.style.display = "none";
        yyp28.style.display = "block";
                v.style.display = "block";
        dialogue.verilyShruberies2++;
        return;
    } else if (dialogue.verilyShruberies2 === 17) {
        yyp28.style.display = "none";
        v.style.display = "none";
        dialogue.verilyShruberies2 = true;
        dialogue.blockArrowTravel = false;
        dialogue.verilyFive = false;
        dialogue.verilySix = true;
        dialogue.shrubExtinguished = true;
        //we're not making an animation for this one, boys
        //verilydowsing.style.display = "block";
        //verilysprite.style.display = "none";
        //setTimeout( function() {
        bushDowsing.play();
        fire.pause();
          dowsedbush.style.display = "block";
          burningbush.style.display = "none";
          fullbucket.style.display = "none";
          emptybucket.style.display = "block";
        //}, 4000);
    }
  }});} else if (dialogue.verilySix) {
    verilyGo.play();
      yyp26a.style.display = "block";
        vsnide.style.display = "block";
      dialogue.verilyShrubesdfriessd = 1;
      dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.verilyShrubesdfriessd === 1) {
        yyp26a.style.display = "none";
        yyp27a.style.display = "block";
        vsnide.style.display = "none";
        vrel.style.display = "block";
        dialogue.verilyShrubesdfriessd++;
        return;
    } else if (dialogue.verilyShrubesdfriessd === 2) {
        yyp27a.style.display = "none";
        yyp28a.style.display = "block";
        vrel.style.display = "block";
        dialogue.verilyShrubesdfriessd++;
        return;
    } else if (dialogue.verilyShrubesdfriessd === 3) {
        yyp28a.style.display = "none";
        yyp29.style.display = "block";
        vrel.style.display = "none";
        v.style.display = "block";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 4) {
        yyp29.style.display = "none";
        yyp30.style.display = "block";
        kside.style.display = "block";
        v.style.display = "none";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 5) {
        yyp30.style.display = "none";
        yyp31.style.display = "block";
        bside.style.display = "block";
        kside.style.display = "none";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 6) {
        yyp31.style.display = "none";
        yyp32.style.display = "block";
        bside.style.display = "none";
        b.style.display = "block";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 7) {
        yyp32.style.display = "none";
        yyp33.style.display = "block";
        vdm.style.display = "block";
        b.style.display = "none";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 8) {
        yyp33.style.display = "none";
        yyp34.style.display = "block";
        v.style.display = "block";
        vdm.style.display = "none";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 9) {
        yyp34.style.display = "none";
        yyp35.style.display = "block";
        v.style.display = "block";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 10) {
        yyp35.style.display = "none";
        yyp36.style.display = "block";
        vrel.style.display = "block";
        v.style.display = "none";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 11) {
        yyp36.style.display = "none";
        yyp37.style.display = "block";
        v.style.display = "block";
        vrel.style.display = "none";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 12) {
        yyp37.style.display = "none";
        yyp38.style.display = "block";
        kstu.style.display = "block";
        v.style.display = "none";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 13) {
        yyp38.style.display = "none";
        yyp39.style.display = "block";
        k.style.display = "block";
        kstu.style.display = "none";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 14) {
        yyp39.style.display = "none";
        yyp40.style.display = "block";
        v.style.display = "block";
        k.style.display = "none";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 15) {
        yyp40.style.display = "none";
        yyp41.style.display = "block";
        vrel.style.display = "block";
        v.style.display = "none";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 16) {
        yyp41.style.display = "none";
        yyp42.style.display = "block";
        v.style.display = "block";
        vrel.style.display = "none";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 17) {
        yyp42.style.display = "none";
        yyp43.style.display = "block";
        v.style.display = "block";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 18) {
        yyp43.style.display = "none";
        yyp44.style.display = "block";
                v.style.display = "block";

        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 19) {
        yyp44.style.display = "none";
        yyp45.style.display = "block";
               v.style.display = "block";

        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 20) {
        yyp45.style.display = "none";
        yyp46.style.display = "block";
                v.style.display = "block";
        dialogue.verilyShrubesdfriessd++;
        return;
    } else if (dialogue.verilyShrubesdfriessd === 21) {
        yyp46.style.display = "none";
        yyp47.style.display = "block";
                k.style.display = "block";
                v.style.display = "none";
        dialogue.verilyShrubesdfriessd++;
        return;
    }else if (dialogue.verilyShrubesdfriessd === 22) {
        yyp47.style.display = "none";
        k.style.display = "none";
        dialogue.verilyShrubesdfriessd = true;
        dialogue.blockArrowTravel = false;
        dialogue.verilySeven = true;
        dialogue.verilySix = false;
    }
  }});
  } else if (dialogue.verilySeven) {
    verilyGo.play();
      yyp48.style.display = "block";
      ksl.style.display = "block";
      dialogue.verilyIdlskdbfkjda = 1;
      dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.verilyIdlskdbfkjda === 1) {
      yyp48.style.display = "none";
        yyp48a.style.display = "block";
      ksl.style.display = "none";
      kside.style.display = "block";
      dialogue.verilyIdlskdbfkjda = "pie";
        return;
    } else if (dialogue.verilyIdlskdbfkjda === "pie") {
         yyp48a.style.display = "none";
        yyp49.style.display = "block";
      vrel.style.display = "block";
      kside.style.display = "none";
      dialogue.verilyIdlskdbfkjda = 2;
        return;
    }  else if (dialogue.verilyIdlskdbfkjda === 2) {
        yyp49.style.display = "none";
        yyp50.style.display = "block";
      v.style.display = "block";
      vrel.style.display = "none";
      dialogue.verilyIdlskdbfkjda++;
        return;
    } else if (dialogue.verilyIdlskdbfkjda === 3) {
        yyp50.style.display = "none";
        yyp51.style.display = "block";
      v.style.display = "block";
      dialogue.verilyIdlskdbfkjda++;
        return;
    } else if (dialogue.verilyIdlskdbfkjda === 4) {
        yyp51.style.display = "none";
        yyp52.style.display = "block";
      vrel.style.display = "block";
      v.style.display = "none";
      dialogue.verilyIdlskdbfkjda++;
        return;
    } else if (dialogue.verilyIdlskdbfkjda === 5) {
        yyp52.style.display = "none";
        yyp53.style.display = "block";
      v.style.display = "block";
      vrel.style.display = "none";
      dialogue.verilyIdlskdbfkjda++;
        return;
    } else if (dialogue.verilyIdlskdbfkjda === 6) {
        yyp53.style.display = "none";
      v.style.display = "none";
      dialogue.verilyIdlskdbfkjda = true;
      dialogue.blockArrowTravel = false;
        dialogue.verilySeven = false;
        dialogue.verilyEight = true;
        return;
    }
  }});
  } else if (dialogue.verilyEight) {
    verilyGo.play();
      yyp54.style.display = "block";
      b.style.display = "block";
            dialogue.blockArrowTravel = true;
      dialogue.verilyfdsgdfgIdlskdbfkjda = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.verilyfdsgdfgIdlskdbfkjda === 1) {
        yyp54.style.display = "none";
        yyp55.style.display = "block";
      b.style.display = "block";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    } else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 2) {
        yyp55.style.display = "none";
        yyp56.style.display = "block";
      b.style.display = "block";
      dialogue.verilyfdsgdfgIdlskdbfkjda = "tuna";
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === "tuna") {
        yyp56.style.display = "none";
        yyp56a.style.display = "block";
      b.style.display = "none";
      k.style.display = "block";
      dialogue.verilyfdsgdfgIdlskdbfkjda = 3;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 3) {
        yyp56a.style.display = "none";
        yyp57.style.display = "block";
      v.style.display = "block";
      k.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    } else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 4) {
        yyp57.style.display = "none";
        yyp58.style.display = "block";
      b.style.display = "block";
      v.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    } else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 5) {
        yyp58.style.display = "none";
        yyp58a.style.display = "block";
      b.style.display = "block";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 6) {
        yyp58a.style.display = "none";
        yyp59.style.display = "block";
      v.style.display = "block";
      b.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda = "cheesepuff";
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === "cheesepuff") {
        yyp59.style.display = "none";
        yyp59a.style.display = "block";
      v.style.display = "block";
      dialogue.verilyfdsgdfgIdlskdbfkjda = 7;
        return;
    } else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 7) {
        yyp59a.style.display = "none";
        yyp60.style.display = "block";
      b.style.display = "block";
      v.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 8) {
        yyp60.style.display = "none";
        yyp61.style.display = "block";
      vsup.style.display = "block";
      b.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 9) {
        yyp61.style.display = "none";
        yyp61a.style.display = "block";
      vsup.style.display = "none";
      vsup2.style.display = "block";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 10) {
        yyp61a.style.display = "none";
        yyp62.style.display = "block";
      b.style.display = "block";
      vsup2.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 11) {
        yyp62.style.display = "none";
        yyp63.style.display = "block";
      vrel.style.display = "block";
      b.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda = "fish";
        return;
    }   else if (dialogue.verilyfdsgdfgIdlskdbfkjda === "fish") {
        yyp63.style.display = "none";
        yyp63a.style.display = "block";
      vrel.style.display = "block";
      dialogue.verilyfdsgdfgIdlskdbfkjda = 12;
        return;
    } else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 12) {
        yyp63a.style.display = "none";
        yyp64.style.display = "block";
      b.style.display = "block";
      vrel.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 13) {
        yyp64.style.display = "none";
        yyp65.style.display = "block";
      v.style.display = "block";
      b.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 14) {
        yyp65.style.display = "none";
        yyp66.style.display = "block";
      v.style.display = "block";
      b.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 15) {
        yyp66.style.display = "none";
        yyp67.style.display = "block";
      v.style.display = "block";
      b.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 16) {
        yyp67.style.display = "none";
        yyp67a.style.display = "block";
      b.style.display = "block";
      v.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 17) {
        yyp67a.style.display = "none";
        yyp67b.style.display = "block";
      b.style.display = "block";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 18) {
        yyp67b.style.display = "none";
        yyp68.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 19) {
        yyp68.style.display = "none";
        yyp69.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 20) {
        yyp69.style.display = "none";
        yyp70.style.display = "block";
      v.style.display = "block";
      k.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 21) {
        yyp70.style.display = "none";
        yyp71.style.display = "block";
      k.style.display = "block";
      v.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 22) {
        yyp71.style.display = "none";
        yyp72.style.display = "block";
      v.style.display = "block";
      k.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 23) {
        yyp72.style.display = "none";
        yyp73.style.display = "block";
      v.style.display = "block";
      dialogue.verilyfdsgdfgIdlskdbfkjda++;
        return;
    }  else if (dialogue.verilyfdsgdfgIdlskdbfkjda === 24) {
      yyp73.style.display = "none";
      v.style.display = "none";
      dialogue.verilyfdsgdfgIdlskdbfkjda = true;
      dialogue.verilyEight = false;
      dialogue.verilyIsInLobbyThree = true;
      dialogue.blockArrowTravel = false;
        return;
    } 
  }});
  }

}

function verilyIdleDialogue() {
  if (!dialogue.verilyisnowburningashrub) {
     if (dialogue.verilythree) {
      verilyGo.play();
 zzk1.style.display = "block";
      k.style.display = "block";
      dialogue.verilyIdles3 = 1;
              dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.verilyIdles3 === 1) {
        zzk1.style.display = "none";
        zzk2.style.display = "block";
      v.style.display = "block";
      k.style.display = "none";
      dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 2) {
        zzk2.style.display = "none";
        zzk3.style.display = "block";
      v.style.display = "block";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 3) {
        zzk3.style.display = "none";
        zzk4.style.display = "block";
      v.style.display = "none";
      k.style.display = "block";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 4) {
        zzk4.style.display = "none";
        zzk5.style.display = "block";
      v.style.display = "block";
      k.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 5) {
        zzk5.style.display = "none";
        zzk6.style.display = "block";
      v.style.display = "block";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 6) {
        zzk6.style.display = "none";
        zzk7.style.display = "block";
      k.style.display = "block";
      v.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 7) {
        zzk7.style.display = "none";
        zzk8.style.display = "block";
      v.style.display = "block"; //gonna map the whole thing?
      k.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 8) {
        zzk8.style.display = "none";
        zzk9.style.display = "block";
      k.style.display = "block";
      v.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 9) {
        zzk9.style.display = "none";
        zzk10.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 10) {
        zzk10.style.display = "none";
        zzk11.style.display = "block";
      b.style.display = "block";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 11) {
        zzk11.style.display = "none";
        zzk12.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 12) {
        zzk12.style.display = "none";
        zzk13.style.display = "block";
      vhap.style.display = "block"; //haha!
      k.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 13) {
        zzk13.style.display = "none";
        zzk14.style.display = "block";
      v.style.display = "block";
      vhap.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 14) {
        zzk14.style.display = "none";
      v.style.display = "none";
      dialogue.verilytwo = false;
      dialogue.verilythree = false;
              dialogue.blockArrowTravel = false;

        return;
    } 
}});  
    } else if (dialogue.verilytwo) {
      verilyGo.play();
      zzj1.style.display = "block";
      b.style.display = "block";
      dialogue.verilyIdles2 = 1;
              dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.verilyIdles2 === 1) {
        zzj1.style.display = "none";
        zzj2.style.display = "block";
      v.style.display = "block";
      b.style.display = "none";
      dialogue.verilyIdles2++;
        return;
    } else if (dialogue.verilyIdles2 === 2) {
        zzj2.style.display = "none";
        zzj3.style.display = "block";
      v.style.display = "block";
            dialogue.verilyIdles2++;
        return;
    } else if (dialogue.verilyIdles2 === 3) {
        zzj3.style.display = "none";
        zzj4.style.display = "block";
      vrel.style.display = "block";
      v.style.display = "none";
            dialogue.verilyIdles2++;
        return;
    } else if (dialogue.verilyIdles2 === 4) {
        zzj4.style.display = "none";
      vrel.style.display = "none";
            dialogue.verilythree = true;
            dialogue.verilytwo = false;
            dialogue.verilyone = true;
                    dialogue.blockArrowTravel = false;

        return;
    }
}});  
    } else if (!dialogue.verilyone) {
      verilyGo.play();
      zzi1.style.display = "block";
      v.style.display = "block";
      dialogue.verilyIdles = 1;
              dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.verilyIdles === 1) {
        zzi1.style.display = "none";
        zzi2.style.display = "block";
      k.style.display = "block";
      v.style.display = "none";
      dialogue.verilyIdles++;
        return;
    } else if (dialogue.verilyIdles === 2) {
        zzi2.style.display = "none";
        zzi3.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
            dialogue.verilyIdles++;
        return;
    } else if (dialogue.verilyIdles === 3) {
        zzi3.style.display = "none";
        zzi4.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
            dialogue.verilyIdles++;
        return;
    } else if (dialogue.verilyIdles === 4) {
        zzi4.style.display = "none";
        zzi5.style.display = "block";
      v.style.display = "block";
            dialogue.verilyIdles++;
        return;
    } else if (dialogue.verilyIdles === 5) {
        zzi5.style.display = "none";
        zzi6.style.display = "block";
      k.style.display = "block";
      v.style.display = "none";
            dialogue.verilyIdles++;
        return;
    } else if (dialogue.verilyIdles === 6) {
        zzi6.style.display = "none";
      k.style.display = "none";
      dialogue.verilytwo = true;
      dialogue.verilyone = true;
      dialogue.blockArrowTravel = false;
        return;
    }
}});  
}
}
}

function signDialogue() {
    if (game.underConstruction) {
    if (!dialogue.blankSign) {
    yyd1.style.display = "block";
    b.style.display = "block";
    dialogue.blankSign = 1;
    document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.blankSign === 1) {
        yyd1.style.display = "none";
        b.style.display = "none";
        dialogue.blankSign = true;
        dialogue.signPost = true;
        notifnoise.play();
        increaseNotificationLobbyThree();
    }
}});
    } }
}

function wouldASwordHelp() {
    zzc1.style.display = "block";
      k.style.display = "block";
      dialogue.wouldASwordHelp = 1;
              dialogue.blockArrowTravel = true;

      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.wouldASwordHelp === 1) {
        zzc1.style.display = "none";
        zzc2.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
      dialogue.wouldASwordHelp++;
        return;
    } else if (dialogue.wouldASwordHelp === 2) {
        zzc2.style.display = "none";
      b.style.display = "none";
              dialogue.blockArrowTravel = false;

        return;
    }
}});
}

function niceACode() {
if (!dialogue.aNumericalCode2){
    zzh2.style.display = "block";
      k.style.display = "block";
      dialogue.aNumericalCode = 1;
              dialogue.blockArrowTravel = true;

      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.aNumericalCode === 1) {
        zzh2.style.display = "none";
        zzh3.style.display = "block";
      k.style.display = "block";
      dialogue.aNumericalCode++;
        return;
    } else if (dialogue.aNumericalCode === 2) {
        zzh3.style.display = "none";
      k.style.display = "none";
      dialogue.aNumericalCode2 = true;
      dialogue.aNumericalCode4 = true;
              dialogue.blockArrowTravel = false;

      return;
    }
}});} else if (dialogue.aNumericalCode4) {
    zzh4.style.display = "block";
      b.style.display = "block";
      dialogue.aNumericalCode3 = 1;
              dialogue.blockArrowTravel = true;

      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.aNumericalCode3 === 1) {
        zzh4.style.display = "none";
        b.style.display = "none";
       dialogue.aNumericalCode4 = false;
               dialogue.blockArrowTravel = false;

        return;
    } 
    }});}
}


function looksLikeTheresAnEnvelopeInTheChandelier() {
    if (!dialogue.looksLikeTheresAnEnvelopeInTheChandelier){
    zza1.style.display = "block";
      k.style.display = "block";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier = 1;
              dialogue.blockArrowTravel = true;

      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 1) {
        zza1.style.display = "none";
        zza2.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 2) {
        zza2.style.display = "none";
        zza3.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 3) {
        zza3.style.display = "none";
        zza4.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    }  else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 4) {
        zza4.style.display = "none";
        zza5.style.display = "block";
      b.style.display = "block";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 5) {
        zza5.style.display = "none";
        zza6.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
    return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 6) {
        zza6.style.display = "none";
        zza7.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
    return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 7) {
        zza7.style.display = "none";
        zza8.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
              dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 8) {
        zza8.style.display = "none";
        zza9.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
              dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 9) {
        zza9.style.display = "none";
        zza10.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 10) {
        zza10.style.display = "none";
        zza11.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 11) {
        zza11.style.display = "none";
        k.style.display = "none";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier = true;
              dialogue.blockArrowTravel = false;

        return;
    }

}});} else {
    zzb1.style.display = "block";
      b.style.display = "block";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier2 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier2 === 1) {
        zzb1.style.display = "none";
      b.style.display = "none";
        return;
    } 
}});
}
}


function applySwordToRope() {
    if (!candleLeer.isOnTheGround) {
    zzd1.style.display = "block";
      b.style.display = "block";
      dialogue.applySwordToRope = 1;
              dialogue.blockArrowTravel = true;

      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.applySwordToRope === 1) {
        zzd2.style.display = "block";
        zzd1.style.display = "none";
        b.style.display = "block";
      dialogue.applySwordToRope++;
        return;
    } else if (dialogue.applySwordToRope === 2) {
        zzd2.style.display = "none";
        b.style.display = "none";
        chandelierexplorers.style.display = "block";
    chandelierground.style.display = "block";
    explorers.style.display = "none";
    chandelier.style.display = "none";
    candleLeer.isOnTheGround = true;
    dialogue.applySwordToRope = false;
            dialogue.blockArrowTravel = false;

    document.cookie = "chandelierCut=chandelierCut";
    chandelierfall.play();
        return;
    }
}});
    
    }
}

function whyPipe() {
      zzy1.style.display = "block";
      k.style.display = "block";
      dialogue.whyapipe = 1;
              dialogue.blockArrowTravel = true;

      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.whyapipe === 1) {
        zzy1.style.display = "none";
        zzy2.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.whyapipe++;
        return;
    } else if (dialogue.whyapipe === 2) {
        zzy2.style.display = "none";
        zzy3.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    } else if (dialogue.whyapipe === 3) {
        zzy3.style.display = "none";
        zzy4.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.whyapipe++;
        return;
    } else if (dialogue.whyapipe === 4) {
        zzy4.style.display = "none";
        zzy5.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    } else if (dialogue.whyapipe === 5) {
        zzy5.style.display = "none";
        zzy6.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 6) {
        zzy6.style.display = "none";
        zzy7.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 7) {
        zzy7.style.display = "none";
        zzy8.style.display = "block";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 8) {
        zzy8.style.display = "none";
        zzy9.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 9) {
        zzy9.style.display = "none";
        zzy10.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 10) {
        zzy10.style.display = "none";
        zzy11.style.display = "block";
        k.style.display = "none";
        b.style.display = "block"; //why?
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 11) {
        zzy11.style.display = "none";
        zzy12.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 12) {
        zzy12.style.display = "none";
        zzy13.style.display = "block";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 13) {
        zzy13.style.display = "none";
        zzy14.style.display = "block";
        kstu.style.display = "block";
        k.style.display = "none";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 14) {
        zzy14.style.display = "none";
        zzy15.style.display = "block";
        kwtf.style.display = "block";
        kstu.style.display = "none";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 15) {
        zzy15.style.display = "none";
        zzy16.style.display = "block";
        kwtf.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 16) {
        zzy16.style.display = "none";
        zzy17.style.display = "block";
        kwtf.style.display = "none";
        b.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 17) {
        zzy17.style.display = "none";
        zzy18.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 18) {
        zzy18.style.display = "none";
        k.style.display = "none";
        dialogue.whyPipe = true;
        dialogue.whyapipe = true;
        dialogue.blockArrowTravel = false;
        pickCenterS();
        document.cookie = "waipaiype=waipaiype";
        return;
    }
}});
}



function takeCupcake() {
if (prizes.cupcake && !dialogue.treated) {
    cupcake.style.display = "none";
    //a little treat for me
    yyi5.style.display = "block";
    k.style.display = "block"; 
    dialogue.treatforme = 1;
    document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.treatforme === 1) {
        yyi5.style.display = "none";
        yyi6.style.display = "block";
        kdem.style.display = "block";
        k.style.display = "none";
        dialogue.treatforme++;
        return;
    } else if (dialogue.treatforme === 2) {
        yyi6.style.display = "none";
        kdem.style.display = "none";
        dialogue.treatforme = false;
        dialogue.treated = true;
        return;
    }}});
    } else {
        //it's a cupcake!
        if (!dialogue.itsacuppacake) {
          glasstink.play();
      yyi1.style.display = "block";
      k.style.display = "block";
      dialogue.itsacuppacake = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.itsacuppacake === 1) {
        yyi1.style.display = "none";
        yyi2.style.display = "block";
        k.style.display = "block";
        dialogue.itsacuppacake++;
        return;
    } else if (dialogue.itsacuppacake === 2) {
        yyi2.style.display = "none";
        yyi3.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.itsacuppacake++;
        return;
    } else if (dialogue.itsacuppacake === 3) {
        yyi3.style.display = "none";
        yyi5.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
        dialogue.itsacuppacake++;
        return;
    } else if (dialogue.itsacuppacake === 4) {
        yyi5.style.display = "none";
        k.style.display = "none";
        dialogue.itsacuppacake = true;
    }
    }});} else {
      glasstink.play();
      yyi5.style.display = "block";
      k.style.display = "block";
      dialogue.itsacuppacake2 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.itsacuppacake2 === 1) {
        yyi5.style.display = "none";
        k.style.display = "none";
    }}});}
}
}

function takeMacaroniPipe() {
    if (prizes.macaroniPipe) {
        if (!inventory.slot1) {
            if (inventory.slot1 !== "macaroni pipe"
            && inventory.slot2 !== "macaroni pipe"
            && inventory.slot3 !== "macaroni pipe"
            && inventory.slot4 !== "macaroni pipe") {
                macaronipipe.style.display = "none";
                document.cookie = "macaronipipe=macaronipipe";
                key.macaroni = true;
                tubepick.play();
                inventory.slot1 = "macaroni pipe";}
        } else if (!inventory.slot2) {
            if (inventory.slot1 !== "macaroni pipe"
            && inventory.slot2 !== "macaroni pipe"
            && inventory.slot3 !== "macaroni pipe"
            && inventory.slot4 !== "macaroni pipe") {
                macaronipipe.style.display = "none";
                document.cookie = "macaronipipe=macaronipipe";
                key.macaroni = true;
                tubepick.play();
                inventory.slot2 = "macaroni pipe";}
        } else if (!inventory.slot3) {
            if (inventory.slot1 !== "macaroni pipe"
            && inventory.slot2 !== "macaroni pipe"
            && inventory.slot3 !== "macaroni pipe"
            && inventory.slot4 !== "macaroni pipe") {
                macaronipipe.style.display = "none";
                document.cookie = "macaronipipe=macaronipipe";
                key.macaroni = true;
                tubepick.play();
                inventory.slot3 = "macaroni pipe";}
        }  else if (!inventory.slot4) {
            if (inventory.slot1 !== "macaroni pipe"
            && inventory.slot2 !== "macaroni pipe"
            && inventory.slot3 !== "macaroni pipe"
            && inventory.slot4 !== "macaroni pipe") {
                macaronipipe.style.display = "none";
                document.cookie = "macaronipipe=macaronipipe";
                key.macaroni = true;
                tubepick.play();
                inventory.slot4 = "macaroni pipe";}
        } else {
            tooHeavy();
        }
    } else if (dialogue.weHaveBat && !prizes.macaroniPipe) {
      brokenglass.style.display = "block";
      prizeglass2.style.display = "none";
      glassSmash.play();
      prizes.macaroniPipe = true;
    } else {
      glasstink.play();
      zzv3.style.display = "block";
      k.style.display = "block";
      dialogue.looksLikeMacaroni = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.looksLikeMacaroni === 1) {
        zzv3.style.display = "none";
        k.style.display = "none";
        dialogue.macaroniPipeSeen = true;
    }}});
    }
}

function takeTeddyBear() {
    if (prizes.teddyBear) {
        yyv1.style.display = "block";
      br3.style.display = "block";
      dialogue.nowhaveTeddyBear = 1;
      dialogue.blockArrowTravel = true;
      teddybear.style.display = "none";
      explorersteddybear.style.display = "block";
      dialogue.explorersteddybearworn = true;
      placeTeddyBear.play();
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.nowhaveTeddyBear === 1) {
        yyv1.style.display = "none";
        br3.style.display = "none";
      dialogue.nowhaveTeddyBear = true;
      dialogue.blockArrowTravel = false;
    }
  }});} else {
        if (!dialogue.haveThatBear) {
          glasstink.play();
      zzw1.style.display = "block";
      b.style.display = "block";
      dialogue.haveTeddyBear = 1;
      dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.haveTeddyBear === 1) {
        zzw1.style.display = "none";
        zzw2.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
      dialogue.haveTeddyBear++;
        return;
    } else if (dialogue.haveTeddyBear === 2) {
        zzw2.style.display = "none";
        zzw3.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.haveTeddyBear++;
        return;
    } else if (dialogue.haveTeddyBear === 3) {
        zzw3.style.display = "none";
        zzw4.style.display = "block";
        b.style.display = "none";
        kwtf.style.display = "block";
        dialogue.haveTeddyBear++;
        return;
    } else if (dialogue.haveTeddyBear === 4) {
        zzw4.style.display = "none";
        kwtf.style.display = "none";
        dialogue.haveThatBear = true;
        dialogue.haveThatBear2 = true;
        dialogue.blockArrowTravel = false;
        return;
    }
}});} else if (dialogue.haveThatBear2) {
  glasstink.play();
    zzwa1.style.display = "block";
      b.style.display = "block";
      dialogue.haveTeddyBear2 = 1; //we will stop at nothing
      dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.haveTeddyBear2 === 1) {
        zzwa1.style.display = "none";
        b.style.display = "none";
        dialogue.haveThatBear2 = false;
        dialogue.haveThatBear3 = true;
        dialogue.blockArrowTravel = false;
    } }});
} else if (dialogue.haveThatBear3) {
  glasstink.play();
  dialogue.blockArrowTravel = true;
    zzwb1.style.display = "block";
      b.style.display = "block";
      dialogue.haveTeddyBear3 = 1; //there will be no survivors
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.haveTeddyBear3 === 1) {
        zzwb1.style.display = "none";
        b.style.display = "none";
        dialogue.haveThatBear3 = false;
        dialogue.haveThatBear4 = true;
        dialogue.blockArrowTravel = false;
    } }});
} else if (dialogue.haveThatBear4 && dialogue.weHaveBat && !dialogue.notBear) {
    glasstink.play();
 dialogue.blockArrowTravel = true;
    zzwb2.style.display = "block";
      b.style.display = "block";
      dialogue.notHaveTeddyBear = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.notHaveTeddyBear === 1) {
        zzwb2.style.display = "none";
        b.style.display = "none";
        zzwb3.style.display = "block";
        k.style.display = "block";
        dialogue.notHaveTeddyBear++;
    } else if (dialogue.notHaveTeddyBear === 2) {
        zzwb3.style.display = "none";
        b.style.display = "none";
        zzwb4.style.display = "block";
        k.style.display = "block";
        dialogue.notHaveTeddyBear++;
    } else if (dialogue.notHaveTeddyBear === 3) {
        zzwb4.style.display = "none";
        k.style.display = "none";
        dialogue.notHaveTeddyBear = true;
         dialogue.blockArrowTravel = false;
         dialogue.notBear = true;
    }
  }
});
    } else if (dialogue.haveThatBear4 && dialogue.weHaveBat && dialogue.notBear) {
    glasstink.play();
 dialogue.blockArrowTravel = true;
    zzwb2.style.display = "block";
      b.style.display = "block";
      dialogue.notHaveTeddyBear = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.notHaveTeddyBear === 1) {
        zzwb2.style.display = "none";
        b.style.display = "none";
        dialogue.notHaveTeddyBear = true;
    } 
  }
});
    } else if (dialogue.haveThatBear4) {
   glasstink.play();
} 
}}


function inspectSink() {
      glasstink.play();
      yyo5.style.display = "block";
      b.style.display = "block";
      dialogue.clearglasspipe = 1;
      dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.clearglasspipe === 1) {
        yyo5.style.display = "none";
        b.style.display = "none";
        dialogue.blockArrowTravel = false;
    } }});
}

function selectTable() {
if (!dialogue.mutualism && !dialogue.dontAllowTableDialogueBecauseShuriBeingPursued) {
      yyj1.style.display = "block";
      b.style.display = "block";
      dialogue.mutualism = 1;
              dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.mutualism === 1) {
        yyj1.style.display = "none";
        yyj2.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
      dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 2) {
        yyj2.style.display = "none";
        yyj3.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 3) {
        yyj3.style.display = "none";
        yyj4.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 4) {
        yyj4.style.display = "none";
        yyj5.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    }  else if (dialogue.mutualism === 5) {
        yyj5.style.display = "none";
        yyj6.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 6) {
        yyj6.style.display = "none";
        yyj7.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 7) {
        yyj7.style.display = "none";
        yyj8.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 8) {
        yyj8.style.display = "none";
        yyj9.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 9) {
        yyj9.style.display = "none";
        yyj10.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 10) {
        yyj10.style.display = "none";
        yyj11.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 11) {
        yyj11.style.display = "none";
        yyj12.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 12) {
        yyj12.style.display = "none";
        yyj13.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 13) {
        yyj13.style.display = "none";
        yyj14.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 14) {
        yyj14.style.display = "none";
        yyj15.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 15) {
        yyj15.style.display = "none";
        yyj16.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 16) {
        yyj16.style.display = "none";
        yyj17.style.display = "block";
        k.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 17) {
        yyj17.style.display = "none";
        yyj18.style.display = "block";
        kpun.style.display = "block";
        k.style.display = "none";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 18) {
        yyj18.style.display = "none";
        kpun.style.display = "none";
        dialogue.mutualism = true;
        dialogue.mutualism2 = true;
                dialogue.blockArrowTravel = false;

    }
}});} else if (dialogue.mutualism2) {
      yyj19.style.display = "block";
      k.style.display = "block";
      dialogue.mutualism2 = 1;
              dialogue.blockArrowTravel = true;

      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.mutualism2 === 1) {
        yyj19.style.display = "none";
        yyj20.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
      dialogue.mutualism2++;
        return;
    } else if (dialogue.mutualism2 === 2) {
        yyj20.style.display = "none";
        b.style.display = "none";
        dialogue.mutualism2 = false;
                dialogue.blockArrowTravel = false;

    } 
}});} else if (dialogue.trueMutualism) {
    trueMutualismGo();
}
}

function trueMutualismGo() {
    if (dialogue.trueMutualism) {
    yyr1.style.display = "block";
    dialogue.blockArrowTravel = true;
      b.style.display = "block";
      dialogue.mutualism3 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.mutualism3 === 1) {
          dialogue.blockArrowTravel = true;
        yyr1.style.display = "none";
        yyr2.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 2) {
        yyr2.style.display = "none";
        yyr3.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
      dialogue.mutualism3++;
        return;
    }  else if (dialogue.mutualism3 === 3) {
        yyr3.style.display = "none";
        yyr4.style.display = "block";
        k.style.display = "block";
        bannerBlinking();
      dialogue.mutualism3++;
      dialogue.blockArrowTravel = true;
        return;
    } else if (dialogue.mutualism3 === 4) {
        yyr4.style.display = "none";
        yyr5.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 5) {
        yyr5.style.display = "none";
        yyr6.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 6) {
        yyr6.style.display = "none";
        yyr7.style.display = "block";
        ks.style.display = "block";
        k.style.display = "none";
        dialogue.blockArrowTravel = true;
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 7) {
        yyr7.style.display = "none";
        yyr8.style.display = "block";
        ks.style.display = "none";
        kth.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 8) {
        yyr8.style.display = "none";
        yyr9.style.display = "block";
        k.style.display = "block";
                kth.style.display = "none";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 9) {
        yyr9.style.display = "none";
        yyr10.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 10) {
          dialogue.blockArrowTravel = true;

        yyr10.style.display = "none";
        yyr11.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 11) {
        yyr11.style.display = "none";
        yyr12.style.display = "block";
        b.style.display = "none";
        k3.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 12) {
        yyr12.style.display = "none";
        yyr13.style.display = "block";
         k.style.display = "block";
        k3.style.display = "none";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 13) {
        yyr13.style.display = "none";
        yyr14.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 14) {
        yyr14.style.display = "none";
        yyr15.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 15) {
          dialogue.blockArrowTravel = true;

        yyr15.style.display = "none";
        yyr16.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 16) {
        yyr16.style.display = "none";
        yyr17.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 17) {
        yyr17.style.display = "none";
        yyr18.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 18) {
        yyr18.style.display = "none";
        yyr19.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 19) {
        yyr19.style.display = "none";
        yyr20.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 20) {
        yyr20.style.display = "none";
        yyr21.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 21) {
        yyr21.style.display = "none";
        yyr22.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 22) {
        yyr22.style.display = "none";
        yyr23.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3 = 24;
        return;
    } else if (dialogue.mutualism3 === 24) {
        yyr23.style.display = "none";
        yyr25.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 25) {
        yyr25.style.display = "none";
        yyr26.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 26) {
        yyr26.style.display = "none";
        yyr27.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 27) {
        yyr27.style.display = "none";
        yyr28.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 28) {
        yyr28.style.display = "none";
        yyr29.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 29) {
        yyr29.style.display = "none";
        yyr30.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 30) {
        yyr30.style.display = "none";
        yyr31.style.display = "block";
        bfur.style.display = "block";
        b.style.display = "none";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 31) {
        yyr31.style.display = "none";
        yyr32.style.display = "block";
        bfur.style.display = "none";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 32) {
        yyr32.style.display = "none";
        yyr33.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 33) {
        yyr33.style.display = "none";
        yyr34.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 34) {
        yyr34.style.display = "none";
        yyr35.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    }  else if (dialogue.mutualism3 === 35) {
        yyr35.style.display = "none";
        yyr36.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 36) {
        yyr36.style.display = "none";
        yyr37.style.display = "block";
                b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 37) {
        yyr37.style.display = "none";
        yyr38.style.display = "block";
   b.style.display = "none";
        k.style.display = "block";
              dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 38) {
        yyr38.style.display = "none";
        yyr39.style.display = "block";
                k.style.display = "block";
      dialogue.mutualism3++;
        return;
    }  else if (dialogue.mutualism3 === 39) {
        yyr39.style.display = "none";
        yyr40.style.display = "block";
                b.style.display = "block";
                k.style.display = "none";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 40) {
        yyr40.style.display = "none";
            b.style.display = "none";
    dialogue.mutualism3 = true;
    dialogue.blockArrowTravel = false;
          dialogue.trueMutualism = false;
}}});
}
}

function modernArt() {
    if (!dialogue.itsmodernart) {
      dialogue.blockArrowTravel = true;
           k.style.display = "block";
    dialogue.veryhelpfulmap = 1;
       yyq1.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.veryhelpfulmap === 1) {
       yyq1.style.display = "none";
       yyq2.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
         dialogue.veryhelpfulmap++;
         return;
     } else if (dialogue.veryhelpfulmap === 2) {
       yyq2.style.display = "none";
       b.style.display = "none";
         dialogue.veryhelpfulmap = true;
         dialogue.itsmodernart = true;
     }}});
    }
}


function secretPaintingPassage() {
    if (!dialogue.secretPaintingPassageDiscovered) {
if (!dialogue.secretPassage) {
       dialogue.secretPassage = 1;
       yya1.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.secretPassage === 1) {
       yya1.style.display = "none";
       yya2.style.display = "block";
       ksl.style.display = "block";
       b.style.display = "none";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 2) {
       yya2.style.display = "none";
       yya3.style.display = "block";
       ksl.style.display = "none";
       k.style.display = "block";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 3) {
       yya3.style.display = "none";
       yya4.style.display = "block";
             k.style.display = "block";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 4) {
       yya4.style.display = "none";
       yya5.style.display = "block"; 
       k.style.display = "block";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 5) {
       yya5.style.display = "none";
       yya6.style.display = "block";
       ksl2.style.display = "block";
       k.style.display = "none";
       dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 6) {
       yya6.style.display = "none";
       yya7.style.display = "block";
       ksl.style.display = "block";
       ksl2.style.display = "none";
       dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 7) {
       yya7.style.display = "none";
       yya8.style.display = "block";
             k.style.display = "block";
             ksl.style.display = "none";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 8) {
       yya8.style.display = "none";
       yya9.style.display = "block";
       k.style.display = "block";
       ksl2.style.display = "none";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 9) {
       yya9.style.display = "none";
       yya10.style.display = "block";
       k.style.display = "block";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 10) {
       yya10.style.display = "none";
       yya11.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 11) {
       yya11.style.display = "none";
       yya12.style.display = "block";
       ksl.style.display = "block";
        b.style.display = "none";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 12) {
       yya12.style.display = "none";
       ksl.style.display = "none";
       dialogue.secretPassage = true;
       dialogue.secretPassage1a = true; //secretPassage -> secretPassage1a -> secretPassage2
     }
   }});} else if (dialogue.secretPassage1a) {
    dialogue.blockArrowTravel = true;
        dialogue.secretPassage1a = 1;
       yya13.style.display = "block";
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.secretPassage1a === 1) {
       yya13.style.display = "none";
       yya14.style.display = "block";
       k.style.display = "block";
       k.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 2) {
       yya14.style.display = "none";
       yya15.style.display = "block";
       k.style.display = "block";
       k.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 3) {
       yya15.style.display = "none";
       yya16.style.display = "block";
       ksl.style.display = "block";
       k.style.display = "none";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 4) {
       yya16.style.display = "none";
       yya17.style.display = "block";
              k.style.display = "block";
              ksl.style.display = "none";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 5) {
       yya17.style.display = "none";
       yya18.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 6) {
       yya18.style.display = "none";
       yya19.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 7) {
       yya19.style.display = "none";
       yya20.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 8) {
       yya20.style.display = "none";
       yya21.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 9) {
       yya21.style.display = "none";
       yya22.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 10) {
       yya22.style.display = "none";
       yya23.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 11) {
       yya23.style.display = "none";
       b.style.display = "none";
       dialogue.secretPassage1a = false;
       dialogue.secretPassage2 = true;
       dialogue.verilyisnowburningashrub = true;
       chandelierground.style.display = "none";
       chandelier.style.display = "none";
       dialogue.blockArrowTravel = false;
        increaseNotificationLobbyThree();
     } }});} else if (dialogue.secretPassage2) {
      dialogue.blockArrowTravel = true;
        dialogue.secretPassage2 = 1;
       yya26.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.secretPassage2 === 1) {
       yya26.style.display = "none";
        b.style.display = "none";
        northpaintings.style.display = "none";
        northpaintings2.style.display = "block";
        paintingRemoveClonk.play();
        yya27.style.display = "block";
       kstu.style.display = "block"; //!
         dialogue.secretPassage2++;
         return;
     } else if (dialogue.secretPassage2 === 2) {
       yya27.style.display = "none";
       yya28.style.display = "block";
       kstu.style.display = "none";
       kflip.style.display = "block";
         dialogue.secretPassage2++;
         return;
     }  else if (dialogue.secretPassage2 === 3) {
       yya28.style.display = "none";
       yya29.style.display = "block";
       kflip.style.display = "none";
       kflip2.style.display = "block";
         dialogue.secretPassage2++;
         return;
     } else if (dialogue.secretPassage2 === 4) {
       yya29.style.display = "none";
       yya30.style.display = "block";
       kflip2.style.display = "none";
       b.style.display = "block";
         dialogue.secretPassage2++;
         return;
     } else if (dialogue.secretPassage2 === 5) {
       yya30.style.display = "none";
       b.style.display = "none";
       dialogue.secretPassage2 = false;
       dialogue.blockArrowTravel = false;
       if (map.isOpen) {
        determineTokenPosition();
       }
       randomDoorAudio();
        gallery.style.display = "none";
        arcadeRoom.style.display = "block";
        current.room = "arcadeRoom";  
        dialogue.secretPaintingPassageDiscovered = true; 
        document.cookie = "secretPaintingPassage=secretPaintingPassage";
     }
   }});
   } 
 } else if (dialogue.secretPaintingPassageDiscovered) {
        randomDoorAudio();
        gallery.style.display = "none";
        arcadeRoom.style.display = "block";
        current.room = "arcadeRoom";  
   }
}


function secretPaintingPassageStairs() {
    if (!dialogue.secretPaintingPassageDiscovered) {
if (!dialogue.secretPassage) {
  dialogue.blockArrowTravel = true;
       dialogue.secretPassage = 1;
       yya1.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.secretPassage === 1) {
       yya1.style.display = "none";
       yya2.style.display = "block";
       ksl2.style.display = "block";
       b.style.display = "none";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 2) {
       yya2.style.display = "none";
       yya3.style.display = "block";
       ksl2.style.display = "none";
       k.style.display = "block";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 3) {
       yya3.style.display = "none";
       yya4.style.display = "block";
             k.style.display = "block";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 4) {
       yya4.style.display = "none";
       yya5.style.display = "block"; 
        ksl.style.display = "block";
       k.style.display = "none";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 5) {
       yya5.style.display = "none";
       yya6.style.display = "block";
       ksl2.style.display = "block";
       ksl.style.display = "none";
       dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 6) {
       yya6.style.display = "none";
       yya7.style.display = "block";
       k.style.display = "block";
       ksl2.style.display = "none";
       dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 7) {
       yya7.style.display = "none";
       yya8.style.display = "block";
             k.style.display = "block";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 8) {
       yya8.style.display = "none";
       yya9.style.display = "block";
       k.style.display = "block";
       ksl2.style.display = "none";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 9) {
       yya9.style.display = "none";
       yya10.style.display = "block";
       k.style.display = "block";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 10) {
       yya10.style.display = "none";
       yya11.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 11) {
       yya11.style.display = "none";
       yya12.style.display = "block";
       ksl.style.display = "block";
        b.style.display = "none";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 12) {
       yya12.style.display = "none";
       ksl.style.display = "none";
       dialogue.blockArrowTravel = false;
       dialogue.secretPassage = true;
       dialogue.secretPassage1a = true; //secretPassage -> secretPassage1a -> secretPassage2
     }
   }});} else if (dialogue.secretPassage1a) {
    dialogue.blockArrowTravel = true;
        dialogue.secretPassage1a = 1;
       yya13.style.display = "block";
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.secretPassage1a === 1) {
       yya13.style.display = "none";
       yya14.style.display = "block";
       k.style.display = "block";
       k.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 2) {
       yya14.style.display = "none";
       yya15.style.display = "block";
       k.style.display = "block";
       k.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 3) {
       yya15.style.display = "none";
       yya16.style.display = "block";
       ksl.style.display = "block";
       k.style.display = "none";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 4) {
       yya16.style.display = "none";
       yya17.style.display = "block";
              k.style.display = "block";
              ksl.style.display = "none";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 5) {
       yya17.style.display = "none";
       yya18.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 6) {
       yya18.style.display = "none";
       yya19.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 7) {
       yya19.style.display = "none";
       yya20.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 8) {
       yya20.style.display = "none";
       yya21.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 9) {
       yya21.style.display = "none";
       yya22.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 10) {
       yya22.style.display = "none";
       yya23.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 11) {
       yya23.style.display = "none";
       b.style.display = "none";
       dialogue.secretPassage1a = false;
       dialogue.secretPassage2 = true;
       increaseNotificationLobbyThree();
       dialogue.verilyisnowburningashrub = true;
       dialogue.blockArrowTravel = false;
     } }});} else if (dialogue.secretPassage2) {
        console.log("but you're in the wrong room");
   } 
 }
}


function sixteenFeralRacoons() {
    if (dialogue.feralRacoons && !dialogue.feralRacoonsComplete) {
        dialogue.racoons = 1;
       yye1.style.display = "block";
       dialogue.blockArrowTravel = true;
       feralracoons.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.racoons === 1) {
       yye1.style.display = "none";
       yye2.style.display = "block";
       k.style.display = "block";
       feralracoons.style.display = "none";
         dialogue.racoons++;
         return;
     } else if (dialogue.racoons === 2) {
       yye2.style.display = "none";
       yye3.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.racoons++;
         return;
     } else if (dialogue.racoons === 3) {
       yye3.style.display = "none";
       b.style.display = "none";
         dialogue.feralRacoons = false;
         dialogue.feralRacoonsComplete = true;
         dialogue.blockArrowTravel = false;
         document.cookie = "feralRacoons=feralRacoons";
     }}});
    }
}

function wasntThereAShrubHere() {
    if (!dialogue.wasntThereAShrub) {
dialogue.wasntThereAShrub = 1;
dialogue.blockArrowTravel = true;
       yyw1.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.wasntThereAShrub === 1) {
       yyw1.style.display = "none";
       b.style.display = "none";
         dialogue.wasntThereAShrub = true;
         dialogue.blockArrowTravel = false;
    }}});}
}

function butWedGetAllWet() {
if (!dialogue.letsGoBoating) {
dialogue.letsGoBoating = 1;
dialogue.blockArrowTravel = true;
       zzu1.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.letsGoBoating === 1) {
       zzu1.style.display = "none";
       zzu2.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.letsGoBoating++;
         return;
     } else if (dialogue.letsGoBoating === 2) {
       zzu2.style.display = "none";
       zzu3.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.letsGoBoating = 4;
         return;
     } else if (dialogue.letsGoBoating === 4) {
       zzu3.style.display = "none";
       zzu5.style.display = "block"; 
       b.style.display = "block";
         dialogue.letsGoBoating++;
         return;
     } else if (dialogue.letsGoBoating === 5) {
       zzu5.style.display = "none";
       zzu6.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
      dialogue.letsGoBoating++;
         return;
     } else if (dialogue.letsGoBoating === 6) {
       zzu6.style.display = "none";
       zzu7.style.display = "block";
       k.style.display = "block";
       dialogue.letsGoBoating++;
         return;
     } else if (dialogue.letsGoBoating === 7) {
       zzu7.style.display = "none";
       k.style.display = "none";
       dialogue.letsGoBoating = true;
       dialogue.letsGoBoating2 = true;
       dialogue.blockArrowTravel = false;
     } 
   }});} else if (dialogue.letsGoBoating2 && !key.oars) {
dialogue.goBoating2 = 1;
       zzu7b.style.display = "block";
       b.style.display = "block";
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.goBoating2 === 1) {
       zzu7b.style.display = "none";
       zzu8.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.goBoating2++;
         return;
     } else if (dialogue.goBoating2 === 2) {
       zzu8.style.display = "none";
       zzu9.style.display = "block";
       k.style.display = "block";
         dialogue.goBoating2++;
         return;
     } else if (dialogue.goBoating2 === 3) {
       zzu9.style.display = "none";
       zzu10.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.goBoating2++;
         return;
     } else if (dialogue.goBoating2 === 4) {
       zzu10.style.display = "none";
       zzu11.style.display = "block"; 
       b.style.display = "block";
         dialogue.goBoating2++;
         return;
     } else if (dialogue.goBoating2 === 5) {
       zzu11.style.display = "none";
      b.style.display = "none";
      dialogue.letsGoBoating3 = true;
      dialogue.letsGoBoating2 = false;
      dialogue.blockArrowTravel = false;
         return;
     }  
   }});} else if (dialogue.letsGoBoating3 && !key.oars) {
dialogue.goBoating3 = 1;
       zzu12.style.display = "block";
       k.style.display = "block";
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.goBoating3 === 1) {
       zzu12.style.display = "none";
       zzu13.style.display = "block";
       k.style.display = "block";
         dialogue.goBoating3++;
         return;
     } else if (dialogue.goBoating3 === 2) {
       zzu13.style.display = "none";
       zzu14.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.goBoating3++;
         return;
     } else if (dialogue.goBoating3 === 3) {
       zzu14.style.display = "none";
       zzu15.style.display = "block";
       kstu.style.display = "block";
       b.style.display = "none";
         dialogue.goBoating3++;
         return;
     } else if (dialogue.goBoating3 === 4) {
       zzu15.style.display = "none";
       zzu16.style.display = "block";
       kstu.style.display = "none";
       kwtf.style.display = "block";
        dialogue.goBoating3++;
     } else if (dialogue.goBoating3 === 5) {
       zzu16.style.display = "none";
       kwtf.style.display = "none";
       dialogue.letsGoBoating3 = false;
       dialogue.letsGoBoating4 = true;
       dialogue.blockArrowTravel = false;
     } 
   }});} else if (dialogue.letsGoBoating4 && !key.oars) {
dialogue.goBoating4 = 1;
       zzu17.style.display = "block";
       b.style.display = "block";
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.goBoating4 === 1) {
       zzu17.style.display = "none";
       b.style.display = "none";
       dialogue.blockArrowTravel = false;
         return;
     } 
   }});}
   }


function youdonthavetostandthere() {
       dialogue.blockArrowTravel = true;
       zzz1.style.display = "block";
       b.style.display = "block";
       dialogue.donthaveto = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.donthaveto === 1) {
       zzz1.style.display = "none";
       zzz5.style.display = "block";
       b.style.display = "block";
       dialogue.donthaveto++;
         return;
     } else if (dialogue.donthaveto === 2) {
       zzz5.style.display = "none";
       zzz6.style.display = "block";
        ksta.style.display = "block";
        b.style.display = "none";
       dialogue.donthaveto++;
         return;
     } else if (dialogue.donthaveto === 3) {
       zzz6.style.display = "none";
       zzz7.style.display = "block";
         ksta.style.display = "none";
        b.style.display = "block";
         dialogue.donthaveto++;
         return;
     } else if (dialogue.donthaveto === 4) {
        zzz7.style.display = "none";
       zzz8.style.display = "block";
       ksta.style.display = "block";
        b.style.display = "none";
        dialogue.donthaveto++;
         return;
     } else if (dialogue.donthaveto === 5) {
       zzz8.style.display = "none";
       ksta.style.display = "none";
       dialogue.donthavetostandthere = true;
       document.cookie = "movemeupanddown=movemeupanddown";
       dialogue.blockArrowTravel = false;
         return;
     }
    }})};


function goodWorkTeam() {
    if (!dialogue.goodWork) {
        elmare.pause();
        lamano.pause();
        loferm.play();
        penser.pause();
        queneNote.pause();
        zzr1.style.display = "block";
       b.style.display = "block";
       dialogue.goodWork = 1;
       dialogue.blockArrowTravel = true;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.goodWork === 1) {
       zzr1.style.display = "none";
       zzr2.style.display = "block";
       b.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 2) {
       zzr2.style.display = "none";
       zzr3.style.display = "block";
        b.style.display = "block";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 3) {
       zzr3.style.display = "none";
       zzr4.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 4) {
       zzr4.style.display = "none";
       zzr5.style.display = "block";
             k.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 5) {
       zzr5.style.display = "none";
       zzr6.style.display = "block";
            k.style.display = "none";
            k3.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 6) {
       zzr6.style.display = "none";
       zzr7.style.display = "block";
        k3.style.display = "none";
        k.style.display = "block";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 7) {
       zzr7.style.display = "none";
       zzr8.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 8) {
       zzr8.style.display = "none";
       zzr9.style.display = "block";
       b.style.display = "block";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 9) {
       zzr9.style.display = "none";
       zzr10.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 10) {
       zzr10.style.display = "none";
       zzr11.style.display = "block";
       b.style.display = "block"; //i would love a plum
       k.style.display = "none";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 11) {
       zzr11.style.display = "none";
       zzr12.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 12) {
       zzr12.style.display = "none";
       zzr13.style.display = "block";
       b.style.display = "block"; //thank you sir knight
       k.style.display = "none";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 13) {
       zzr13.style.display = "none";
       zzr14.style.display = "block";
       b.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 14) {
       zzr14.style.display = "none";
       zzr15.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
        dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 15) {
           zzr15.style.display = "none";
       k.style.display = "none";
        kmap2.style.display = "block";
          dialogue.allowMapEscape2 = true;
        dialogue.goodWork++;
        return;
         }    else if (dialogue.goodWork === 16) {
        kmap2.style.display = "none";
       zzr16.style.display = "block";
       b.style.display = "block"; //interesting!
                   dialogue.allowMapEscape2 = false;
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 17) {
       zzr16.style.display = "none";
       zzr17.style.display = "block";
       b.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 18) {
       zzr17.style.display = "none";
       zzr18.style.display = "block";
       b.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 19) {
       zzr18.style.display = "none";
       zzr19.style.display = "block";
       b.style.display = "none";
       k.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 20) {
       zzr19.style.display = "none";
       zzr20.style.display = "block";
       k.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 21) {
        zzr20.style.display = "none";
        zzr21.style.display = "block";
        k.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 22) {
        zzr21.style.display = "none";
        zzr22.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 23) {
       zzr22.style.display = "none";
       zzr23.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 24) {
       zzr23.style.display = "none";
       k.style.display = "none";
        dialogue.goodWork = true;
        dialogue.blockArrowTravel = false;
         return;
     } 
 }
});
    }
}


function itsLockedSauna() { //sauna door dialogue
       dialogue.locked = 1; //markle
       if (dialogue.chasmDoorTried) {
       j1a.style.display = "block"; //this one's locked...
       } else {
        j1.style.display = "block"; //this one's locked too
       }
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.locked === 1) {
       j1.style.display = "none";
       j1a.style.display = "none";
       j2.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.locked++;
         return;
     } else if (dialogue.locked === 2) {
       j2.style.display = "none";
       j3.style.display = "block";
       dr.style.display = "block"; //door: ...
       k.style.display = "none";
         dialogue.locked++;
         return;
     } else if (dialogue.locked === 3) {
       j3.style.display = "none";
       j4.style.display = "block";
       b.style.display = "block";
       dr.style.display = "none";
         dialogue.locked++;
         return;
     } else if (dialogue.locked === 4) {
       j4.style.display = "none";
       j5.style.display = "block"; //let's look for a key
       b.style.display = "block";
         dialogue.locked++;
         return;
     } else if (dialogue.locked === 5) {
       j5.style.display = "none";
       b.style.display = "none";
         dialogue.locked = true; 
         dialogue.unlocking = true;
         dialogue.lockedconvo = true;
         return;
     } 
   }});
}

function ahStillLocked() {
 if (dialogue.lockedconvo) {
  lockeddoor.play();
       dialogue.lconvo = 1;
       j6.style.display = "block"; //ah. still locked
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lconvo === 1) {
       j6.style.display = "none";
       j7.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
       dialogue.lconvo++;
         return;
     } else if (dialogue.lconvo === 2) {
        j7.style.display = "none";
       b.style.display = "none";
       dialogue.lockedconvo = false;
       dialogue.lconvo = true;
    }
   }});
}
}


function ahISee(){
    if (!dialogue.aha && dialogue.betterTakeThese && !dialogue.noAhISee && !dialogue.ahSimplePlayed) {
        if (dialogue.thatWasEasy){
          dialogue.blockArrowTravel = true;
       dialogue.ahaIsee = 1;
       zzs10.style.display = "block"; //ah. (bridget)
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.ahaIsee === 1) {
       zzs10.style.display = "none";
       b.style.display = "none";
       dialogue.aha = false;
       dialogue.ahSimplePlayed = true;
       dialogue.blockArrowTravel = false;
       document.cookie = "keysEntrance=keysEntrance";
       return;
     }}});}} else if (!dialogue.aha && !dialogue.betterTakeThese && !dialogue.ahaIseeSecond) {
       dialogue.ahaIsee2 = 1;
       zzs10.style.display = "block"; //ah.
       b.style.display = "block";
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.ahaIsee2 === 1) {
       zzs10.style.display = "none";
       zzs11.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
       dialogue.ahaIsee2++;
       return;
     } else if (dialogue.ahaIsee2 === 2) {
       zzs11.style.display = "none";
       zzs12.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.ahaIsee2++;
       return;
     } else if  (dialogue.ahaIsee2 === 3) {
       zzs12.style.display = "none";
       zzs13.style.display = "block";
       k.style.display = "block"; //it is now!
       b.style.display = "none";
       dialogue.ahaIsee2++;
       return;
     } else if (dialogue.ahaIsee2 === 4) {
       zzs13.style.display = "none";
       k.style.display = "none";
       dialogue.ahaIseeSecond = true;
       dialogue.betterTakeThese = true;
       dialogue.noAhISee = true;
       dialogue.blockArrowTravel = false;
       document.cookie = "keysEntrance1=keysEntrance1";
       return;
     }
    }});} 
}

//a basic Kodaly: it's locked! and Bridget follow-up
function itsLockedSecond() {
       if (!dialogue.lockedSecond) {
        lockeddoor.play();
       dialogue.lockedSecond = 1;
       dialogue.blockArrowTravel = true;
       zs1.style.display = "block"; //it's locked!
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecond === 1) {
       zs1.style.display = "none";
       k.style.display = "none";
       dialogue.lockedSecond = true;
       dialogue.lockedSecondFollowUp = false;
       dialogue.blockArrowTravel = false;
     }
   }});
    } else if (!dialogue.lockedSecondFollowUp) {
      lockeddoor.play();
        dialogue.lockedSecondFollowUp = 1;
        dialogue.blockArrowTravel = true;
       zt1.style.display = "block";
       b.style.display = "block"; //what a devilish conundrum
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecondFollowUp === 1) {
        zt1.style.display = "none";
        b.style.display = "none";
       dialogue.lockedSecondFollowUp = false;
       dialogue.blockArrowTravel = false;
     }
   }});
    }
}


function itsLocked() { 
  lockeddoor.play();
    if (!dialogue.lockedIts) {
       dialogue.lockedSecond = 1;
       zs1.style.display = "block"; //it's locked!
       k.style.display = "block";
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecond === 1) {
       zs1.style.display = "none";
       k.style.display = "none";
       dialogue.lockedIts = true;
       dialogue.lockedSecond = true;
       dialogue.lockedADoor = true;
       dialogue.lockedADoor3 = true;
       dialogue.blockArrowTravel = false;
     }
   }});
} else if (dialogue.lockedADoor3) {
     dialogue.lockedSecondAAA = 1;
       zs4.style.display = "block"; //bridget!
       ksta.style.display = "block";
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecondAAA === 1) {
      dialogue.blockArrowTravel = true;
       zs4.style.display = "none";
       zs4a.style.display = "block";
       ksta.style.display = "none";
       b.style.display = "block";
       dialogue.lockedSecondAAA++;
         return;
     } else if (dialogue.lockedSecondAAA === 2) {
      dialogue.blockArrowTravel = true;
       zs4a.style.display = "none";
       zs4b.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
        dialogue.lockedSecondAAA++;
         return;
     } else if (dialogue.lockedSecondAAA === 3) {
      dialogue.blockArrowTravel = true;
       zs4b.style.display = "none";
       zs4d.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
        dialogue.lockedSecondAAA++;
         return;
     } else if (dialogue.lockedSecondAAA === 4) {
       zs4d.style.display = "none";
       b.style.display = "none";
        dialogue.lockedADoor3 = false;
        dialogue.blockArrowTravel = false;
     }
   }});
} else if (dialogue.lockedADoor6) {
     dialogue.lockedSecondABBA = 1;
       zs6.style.display = "block"; //locked.
       k.style.display = "block";
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecondABBA === 1) {
      dialogue.blockArrowTravel = true;
       zs6.style.display = "none";
       zs6a.style.display = "block";
       k.style.display = "block";
       dialogue.lockedSecondABBA++;
         return;
     } else if (dialogue.lockedSecondABBA === 2) {
      dialogue.blockArrowTravel = true;
       zs6a.style.display = "none";
       zs6b.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
       dialogue.lockedSecondABBA++;
         return;
     }  else if (dialogue.lockedSecondABBA === 3) {
       zs6b.style.display = "none";
       b.style.display = "none";
        dialogue.lockedADoor6 = false;
       dialogue.lockedADoor7 = true;
       dialogue.blockArrowTravel = false;
         return;
     }
   }});
} else if (dialogue.lockedADoor7) {
    document.cookie = "lockeddoorskeysrunthrough=lockeddoorskeysrunthrough"
    }
}
    

    function thatWasEasy() {
        if (!dialogue.thatWasEasyDone) {
            dialogue.blockArrowTravel = true;
        dialogue.lockedSecond2 = 1;
       zzs1.style.display = "block"; //that was easy
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecond2 === 1) {
       zzs1.style.display = "none";
       b.style.display = "none";
       dialogue.thatWasEasyDone = true;
       dialogue.blockArrowTravel = false;
       dialogue.lockedSecond2 = false;
     }
   }});
    }
    }

function betterTakeTheseToo() {
    if (!dialogue.betterTakeThese) {
    dialogue.blockArrowTravel = true;
         dialogue.betterTake = 1;
       zzs2.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.betterTake === 1) {
      dialogue.blockArrowTravel = true;
       zzs2.style.display = "none";
       zzs3.style.display = "block";
       b.style.display = "none";
       k.style.display = "block";
         dialogue.betterTake++;
         return;
     } else if (dialogue.betterTake === 2) {
      dialogue.blockArrowTravel = true;
       zzs3.style.display = "none";
       zzs4.style.display = "block";
       ks.style.display = "block";
       k.style.display = "none";
       dialogue.betterTake++;
        return;
     } else if (dialogue.betterTake === 3) {
      dialogue.blockArrowTravel = true;
       zzs4.style.display = "none";
       zzs5.style.display = "block";
       b.style.display = "block";
       ks.style.display = "none";
       dialogue.betterTake++;
        return;
     } else if (dialogue.betterTake === 4) {
      dialogue.blockArrowTravel = true;
       zzs5.style.display = "none";
       zzs6.style.display = "block";
       b.style.display = "none";
       k.style.display = "block";
       dialogue.betterTake++;
        return;
     } else if (dialogue.betterTake === 5) {
      dialogue.blockArrowTravel = true;
       zzs6.style.display = "none";
       zzs7.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.betterTake++;
        return;
     } else if (dialogue.betterTake === 6) {
       zzs7.style.display = "none";
       b.style.display = "none";
       dialogue.betterTakeThese = true;
       dialogue.blockArrowTravel = false;
        return;
     } 
   }});
    }
}


function unlocking() {
        dialogue.unlocking = 1;
       k1.style.display = "block"; //it fits!
       k.style.display = "block";
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.unlocking === 1) {
       k1.style.display = "none";
       k2.style.display = "block"; //yay!
       b.style.display = "block";
       k.style.display = "none";
         dialogue.unlocking++;
         return;
     } else if (dialogue.unlocking === 2) {
       k2.style.display = "none";
       b.style.display = "none";
       dialogue.unlocking = false;
       dialogue.unlocked = true;
       dialogue.unlockedKeySound = true;
       dialogue.blockArrowTravel = false;
    lobby.style.display = "none";
    sauna.style.display = "block";
       unlock.play();
    current.room = "sauna";
    return;
       
     } 
   }});
}

function unlockingSecond() {
        if (!dialogue.unlockingSecond){
        dialogue.unlockingSecond = 1;
       zu1.style.display = "block"; //it fits!
       k.style.display = "block";
       dialogue.blockArrowTravel = true;
       unlock.play();
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.unlockingSecond === 1) {
       zu1.style.display = "none";
       zu2.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.unlockingSecond++;
         return;
     } else if (dialogue.unlockingSecond === 2) {
       zu2.style.display = "none";
       b.style.display = "none";
       dialogue.unlockingSecond = true;
       gardenWest.style.display = "none";
        lockboxRoom.style.display = "block";
        current.room = "lockboxRoom";
        document.cookie = "2ShrubDoorUnlocked=2ShrubDoorUnlocked";
        dialogue.blockArrowTravel = false;
        westlock.style.display = "none";
     } 
   }});
}}


function tooHeavyTooKeys() {
  fullInv.play();
    if (!dialogue.keysAreHeavy) {
    i3.style.display = "block";
    b.style.display = "block";
    dialogue.tooHeavy2Keys = 1;
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy2Keys === 1) {
                i3.style.display = "none";
                i4.style.display = "block";
                b.style.display = "none";
                k.style.display = "block";
                dialogue.tooHeavy2Keys++;
                return;
            } else if (dialogue.tooHeavy2Keys === 2) {
                i4.style.display = "none";
                i5.style.display = "block";
                k.style.display = "block";
                dialogue.tooHeavy2Keys++;
                return;
            }     else if (dialogue.tooHeavy2Keys === 3) {
                i5.style.display = "none";
                k.style.display = "none";
                dialogue.keysAreHeavy = true;
                dialogue.keysAreHeavy2 = true;
                dialogue.blockArrowTravel = false;
            } 
        }});
    } else if (dialogue.keysAreHeavy2) {
        i6.style.display = "block";
        b.style.display = "block";
        dialogue.tooHeavy3Keys = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy3Keys === 1) {
                i6.style.display = "none";
                i7.style.display = "block";
                b.style.display = "none";
                k.style.display = "block";
                dialogue.tooHeavy3Keys++;
                return;
            } else if (dialogue.tooHeavy3Keys === 2) {
                i7.style.display = "none";
                i8.style.display = "block";
                k.style.display = "none";
                b.style.display = "block";
                dialogue.tooHeavy3Keys++;
                return;
            } else if (dialogue.tooHeavy3Keys === 3) {
                i8.style.display = "none";
                i9.style.display = "block";
                b.style.display = "none";
                k.style.display = "block";
                dialogue.tooHeavy3Keys++;
                return;
            } else if (dialogue.tooHeavy3Keys === 4) {
                i9.style.display = "none";
                k.style.display = "none";
                dialogue.keysAreHeavy2 = false;
                dialogue.keysAreHeavy3 = true;
                dialogue.blockArrowTravel = false;
                return;
            } 
        }});
    } else if (dialogue.keysAreHeavy3) {
        i10.style.display = "block";
        b.style.display = "block";
        dialogue.tooHeavy4Keys = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy4Keys === 1) {
                i10.style.display = "none";
                b.style.display = "none";
                dialogue.keysAreHeavy3 = false;
                dialogue.keysAreHeavy4 = true;
                dialogue.blockArrowTravel = false;
                return;
            } 
        }});
    } else if (dialogue.keysAreHeavy4) {
        i11.style.display = "block";
        k.style.display = "block";
        dialogue.tooHeavy4Keys = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy4Keys === 1) {
                i11.style.display = "none";
                k.style.display = "none";
                dialogue.keysAreHeavy4 = false;
                dialogue.keysAreHeavy5 = true;
                dialogue.blockArrowTravel = false;
                return;
            } 
        }});
    } else if (dialogue.keysAreHeavy5) {
        i12.style.display = "block";
        b.style.display = "block";
        dialogue.tooHeavy4Keys = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy4Keys === 1) {
                i12.style.display = "none";
                b.style.display = "none";
                dialogue.keysAreHeavy5 = false;
                dialogue.blockArrowTravel = false;
                dialogue.tooHeavy4Keys = true;
                document.cookie = "tooheavytookeysrunthrough=tooheavytookeysrunthrough";
            } 
        }});
    } 
}

function tooHeavy() {
    fullInv.play();
        invfullanimation.style.display = "block";
    setTimeout(function() {    invfullanimation.style.display = "none";}, 1000);
    if (dialogue.inv0) {
    i1.style.display = "block";
    k.style.display = "block";
    dialogue.tooHeavy1 = 1;
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy1 === 1) {
                i1.style.display = "none";
                i2.style.display = "block";
                k.style.display = "none";
                b.style.display = "block";
                dialogue.tooHeavy1++;
                return;
            } else if (dialogue.tooHeavy1 === 2) {
                i2.style.display = "none";
                b.style.display = "none";
                dialogue.inv1 = true;
                dialogue.inv0 = false;
                dialogue.blockArrowTravel = false;
            }    
        }});
    } else if (dialogue.inv1) {
        n1.style.display = "block";
        k.style.display = "block";
        dialogue.tooHeavy2 = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy2 === 1) {
                n1.style.display = "none";
                n2.style.display = "block";
                k.style.display = "none";
                b.style.display = "block";
                dialogue.tooHeavy2++;
                return;
            } else if (dialogue.tooHeavy2 === 2) {
                n2.style.display = "none";
                n3.style.display = "block";
                b.style.display = "none";
                k.style.display = "block"; //i only got two arms
                dialogue.tooHeavy2++;
                return;
            } else if (dialogue.tooHeavy2 === 3) {
                n3.style.display = "none";
                k.style.display = "none";
                dialogue.inv2 = true;
                dialogue.inv1 = false;
                dialogue.blockArrowTravel = false;
            } 
        }});
    } else if (dialogue.inv2) {
        o1.style.display = "block";
        k.style.display = "block";
        dialogue.tooHeavy3 = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy3 === 1) {
                o1.style.display = "none";
                o2.style.display = "block";
                k.style.display = "none";
                b.style.display = "block";
                dialogue.tooHeavy3++;
                return;
            } else if (dialogue.tooHeavy3 === 2) {
                o2.style.display = "none";
                o3.style.display = "block";
                b.style.display = "none";
                k.style.display = "block";
                dialogue.tooHeavy3++;
                return;
            } else if (dialogue.tooHeavy3 === 3) {
                o3.style.display = "none";
                k.style.display = "none";
                dialogue.inv3 = true;
                dialogue.inv2 = false;
                dialogue.blockArrowTravel = false;
            } 
        }});
    } else if (dialogue.inv3) {
        q1.style.display = "block";
        b.style.display = "block";
        dialogue.tooHeavy4 = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy4 === 1) {
                q1.style.display = "none";
                q2.style.display = "block";
                b.style.display = "none";
                k.style.display = "block"; //we're just wee men 
                dialogue.tooHeavy4++;
                return;
            } else if (dialogue.tooHeavy4 === 2) {
                q2.style.display = "none";
                q3.style.display = "block";
                k.style.display = "none";
                b.style.display = "block";
                dialogue.tooHeavy4++;
                return;
            } else if (dialogue.tooHeavy4 === 3) {
                q3.style.display = "none";
                q4.style.display = "block";
                b.style.display = "none";
                k.style.display = "block"; //we're just wee
                dialogue.tooHeavy4++;
                return;
            }  else if (dialogue.tooHeavy4 === 4) {
                q4.style.display = "none";
                k.style.display = "none";
                dialogue.inv4 = true;
                dialogue.inv3 = false;
                dialogue.tooHeavy4 = true;
                dialogue.blockArrowTravel = false;
            } 
        }});
    } else if (dialogue.inv4) {
        r1.style.display = "block";
        k.style.display = "block";
        dialogue.tooHeavy5 = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy5 === 1) {
                r1.style.display = "none";
                k.style.display = "none";
                dialogue.tooHeavy5 = true;
                dialogue.inv5 = true;
                dialogue.inv4 = false;
                dialogue.inv3 = false;
                dialogue.blockArrowTravel = false;
            }
        }});
    } else if (dialogue.inv5) {
        r1.style.display = "block";
        k.style.display = "block";
        dialogue.tooHeavy6 = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy6 === 1) {
                r1.style.display = "none";
                u2.style.display = "block";
                b.style.display = "block";
                k.style.display = "none";
                dialogue.tooHeavy6++;
            } else if (dialogue.tooHeavy6 === 2) {
                u2.style.display = "none";
                b.style.display = "none";
                dialogue.tooHeavy6 = true;
                dialogue.inv5 = false;
                dialogue.inv4 = false;
                dialogue.inv3 = false;
                dialogue.blockArrowTravel = false;
                 document.cookie = "tooheavy=tooheavy";
            }
        }});
    }
}

function testingTheWaters() {
    z1.style.display = "block";
       k.style.display = "block";
       dialogue.waterTest = 1;
       dialogue.blockArrowTravel = true;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.waterTest === 1) {
      z1.style.display = "none";
      z2.style.display = "block";
      k.style.display = "block";
       dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 2) {
      z2.style.display = "none";
      z3.style.display = "block";
      k.style.display = "block";
         dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 3) {
      z3.style.display = "none";
      z4.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 4) {
      z4.style.display = "none";
      z5.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 5) {
      z5.style.display = "none";
      z6.style.display = "block";
      kin.style.display = "block";
      k.style.display = "none";
       dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 6) {
      z6.style.display = "none";
      z7.style.display = "block";
       k.style.display = "block";
      kin.style.display = "none";
      keypick.play();
         dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 7) {
      z7.style.display = "none";
       z8.style.display = "block";
       k.style.display = "none";
      b.style.display = "block";
      dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 8) {
      z8.style.display = "none";
       b.style.display = "none";
         dialogue.waterTest = true;
         dialogue.blockArrowTravel = false;
         return;
     }
}});
}

function wouldARopeBridgeHelp() {
  if (!dialogue.roperopebridge) {
za1.style.display = "block"; //looks like the bridge has been cut
      k.style.display = "block";
      dialogue.bridge = 1;
      dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.bridge === 1) {
     za1.style.display = "none";
     za2.style.display = "block";
     b.style.display = "block";
     k.style.display = "none";
      dialogue.bridge = 2;
        return;
    } else if (dialogue.bridge === 2) {
     za2.style.display = "none";
     b.style.display = "none";
        dialogue.bridge = true;
        dialogue.blockArrowTravel = false;
        dialogue.roperopebridge = true;
        return;
    }
}});
  } else {
    za2.style.display = "block";
      b.style.display = "block";
      dialogue.bridge2 = 1;
      dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.bridge2 === 1) {
     za2.style.display = "none";
     b.style.display = "none";
      dialogue.bridge2 = true;
    }
}});
  }
      
}

function ropeToss() {
    if (!dialogue.bridgeToss) {
    zb1.style.display = "block"; //here goes nothing
      b.style.display = "block";
      dialogue.bridgeToss = 1;
      dialogue.blockArrowTravel = false;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.bridgeToss === 1) {
     zb1.style.display = "none";
     zb2.style.display = "block"; 
     b.style.display = "block"; 
     ropey.set = true;
     document.cookie = "ropey=ropey";
     chasmrope.style.display = "block";
     dialogue.bridgeToss++;
        if (inventory.slot1 === "rope") {
            item1.innerText = "";
            inventory.slot1 = false;
        } if (inventory.slot2 === "rope") {
            item2.innerText = "";
            inventory.slot2 = false;
        } if (inventory.slot3 === "rope") {
            item3.innerText = "";
            inventory.slot3 = false;
        } if (inventory.slot4 === "rope") {
            item4.innerText = "";
            inventory.slot4 = false;
        }
     return;
    } else if (dialogue.bridgeToss === 2) {
     zb2.style.display = "none";
     zb3.style.display = "block";
     b.style.display = "block";
     k.style.display = "none"; 
        dialogue.bridgeToss++;
        return;
    } else if (dialogue.bridgeToss === 3) {
     zb3.style.display = "none";
      b.style.display = "none";
      dialogue.bridgeToss = true;
      dialogue.blockArrowTravel = false;
        return;
    } }});
    }
}


function ropeToss2() {
    if (!dialogue.bridgeToss2) {
    zb4.style.display = "block"; //here goes nothing 2
      b.style.display = "block";
      dialogue.bridgeToss2 = 1;
      dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.bridgeToss2 === 1) {
     zb4.style.display = "none";
     zb5.style.display = "block"; 
     k.style.display = "block";
     b.style.display = "none";
     dialogue.bridgeToss2++;
     return;
    } else if (dialogue.bridgeToss2 === 2) {
     zb5.style.display = "none";
     zb6.style.display = "block"; 
     k.style.display = "none";
     b.style.display = "block";
     chasmrope2.style.display = "block";
     dialogue.bridgeToss2++;
     return;
    } else if (dialogue.bridgeToss2 === 3) {
          if (inventory.slot1 === "inexplicable rope") {
            item1.innerText = "";
            inventory.slot1 = false;
            ropey.setChasm2 = true;
        } if (inventory.slot2 === "inexplicable rope") {
            item2.innerText = "";
            inventory.slot2 = false;
            ropey.setChasm2 = true;
        } if (inventory.slot3 === "inexplicable rope") {
            item3.innerText = "";
            inventory.slot3 = false;
            ropey.setChasm2 = true;
        } if (inventory.slot4 === "inexplicable rope") {
            item4.innerText = "";
            inventory.slot4 = false;
            ropey.setChasm2 = true;
        }
     zb6.style.display = "none";
      b.style.display = "none";
      dialogue.bridgeToss2 = true;
      dialogue.blockArrowTravel = false;
    } }});
    


    }
}

function northLocked() { //dialogue for door across the chasm in chapter 1
    if (!dialogue.northLobbyLocked) {
      lockeddoor.play();
    zc1.style.display = "block";
      b.style.display = "block";
      dialogue.northLobbyLocked = 1;
      dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.northLobbyLocked === 1) {
     zc1.style.display = "none";
     zc2.style.display = "block";
     k.style.display = "block";
     b.style.display = "none";
      dialogue.northLobbyLocked = 2;
        return;
    } else if (dialogue.northLobbyLocked === 2) {
     zc2.style.display = "none";
     k.style.display = "none";
        dialogue.northLobbyLocked = true;
        dialogue.chasmDoorTried = true;
        door.tried = true;
        dialogue.blockArrowTravel = false;
        return;
    }
}});} else {
  lockeddoor.play();
    zc3.style.display = "block";
      k.style.display = "block";
      dialogue.northLobbyLocked2 = 1;
      dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.northLobbyLocked2 === 1) {
      zc3.style.display = "none";
      k.style.display = "none";
    zc4.style.display = "block";
      b.style.display = "block";
    dialogue.northLobbyLocked2++;
        return;
    } else if (dialogue.northLobbyLocked2 === 2) {
      zc4.style.display = "none";
      b.style.display = "none";
      dialogue.blockArrowTravel = false;
        return;
    } 
}});}}

function tooFar() {
    if (!dialogue.goliath){
    ze1.style.display = "block";
      b.style.display = "block";
      dialogue.tooFar = 1;
      dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.tooFar === 1) {
     ze1.style.display = "none";
     ze2.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
      dialogue.tooFar++;
        return;
    } else if (dialogue.tooFar === 2) {
     ze2.style.display = "none";
     ze3.style.display = "block";
    k.style.display = "none";
      b.style.display = "block";
        dialogue.tooFar++;
        return;
    } else if (dialogue.tooFar === 3) {
     ze3.style.display = "none";
     ze4.style.display = "block";
      b.style.display = "block";
        dialogue.tooFar++;
        return;
    } else if (dialogue.tooFar === 4) {
     ze4.style.display = "none";
      b.style.display = "none";
        dialogue.tooFar = true;
        dialogue.goliath = true;
        dialogue.blockArrowTravel = false;
        return;
    }
}});}
}


function deeperInWeGo() {
    if (!dialogue.deeperIn) {
        dialogue.blockArrowTravel = true;
    zf1.style.display = "block";
      k.style.display = "block";
      dialogue.deeperIn = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.deeperIn === 1) {
    zf1.style.display = "none";
    zf2.style.display = "block";
      b.style.display = "block"; //How's your map looking so far?
      k.style.display = "none";
      dialogue.deeperIn++;
        return;
    } else if (dialogue.deeperIn === 2) {
    zf2.style.display = "none";
    zf3.style.display = "block";
    b.style.display = "none";
    k.style.display = "block"; //let's take a look
        dialogue.deeperIn++;
        return;
    } else if (dialogue.deeperIn === 3) {
    zf3.style.display = "none";
    kmap1.style.display = "block";
    paper.play();
      k.style.display = "none";
      dialogue.allowMapEscape1 = true;
        dialogue.deeperIn++;
        return;
    } else if (dialogue.deeperIn === 4) {
        zf3.style.display = "none";
        zf4.style.display = "block";
      b.style.display = "block";
      kmap1.style.display = "none";
            dialogue.allowMapEscape1 = false;
        dialogue.deeperIn++;
        return;
    }  else if (dialogue.deeperIn === 5) {
        zf4.style.display = "none";
        zf5.style.display = "block";
      b.style.display = "block";
      dialogue.deeperIn++;
        return;
    } else if (dialogue.deeperIn === 6) {
        zf5.style.display = "none";
      b.style.display = "none";
      chasm.style.display = "none";
      northlockchasm.style.display = "none";
      lamano.play();
      penser.pause();
      randomDoorAudio();
        current.room = "hallway";
        chapter2banner.style.display = "block";
        bannerDecay2();
        hallexplorers.style.display = "block";
        chasmexplorers.style.display = "none";
        hallway.style.display = "block";
        dialogue.deeperIn = true;
        dialogue.blockArrowTravel = false;
        dialogue.goingDeeperIntoTheLabyrinth = true;
        return;
    }
}});} else {
    chasm.style.display = "none";
    current.room = "hallway";
    chasmexplorers.style.display = "none";
    hallexplorers.style.display = "block";
    hallway.style.display = "block";
    map.region2 = true;
    map.region1 = false;
}
}

function shrub1() {
  if (current.room === "hallway") {
    if (!dialogue.shrub && dialogue.verilyIntro) {
        zg1.style.display = "block";
        b.style.display = "block";
        dialogue.shrub = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.shrub === 1) {
        zg1.style.display = "none";
        zg2.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 2) {
        zg2.style.display = "none";
        zg3.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 3) {
        zg3.style.display = "none";
        zg4.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 4) {
        zg4.style.display = "none";
        zg5.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 5) {
        zg5.style.display = "none";
        zg6.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 6) {
        zg6.style.display = "none";
        zg7.style.display = "block";
        k.style.display = "block"; //So there's something about this shrub that the labyrinth is using to give us a clue about how to get further in?
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 7) {
        zg7.style.display = "none";
        zg8.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 8) {
        zg8.style.display = "none";
        zg9.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 9) {
        zg9.style.display = "none";
        zh10.style.display = "block";
        k.style.display = "block"; //It does kind of look like a numeral 7.
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 10) {
        zh10.style.display = "none";
        zh11.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 11) {
        zh11.style.display = "none";
        zg12.style.display = "block";
        k.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 12) {
        zg12.style.display = "none";
        zg13.style.display = "block";
        kn.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 13) {
        zg13.style.display = "none";
        zg14.style.display = "block";
        k.style.display = "block";
        kn.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 14) {
        zg14.style.display = "none";
        zg15.style.display = "block"; //that is fucked up.
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 15) {
        zg15.style.display = "none";
        b.style.display = "none";
        dialogue.shrub = true;
        document.cookie = "shrubbery=shrubbery";
        dialogue.blockArrowTravel = false;
          return;
      }
  }
}); 
    } if (!dialogue.shrub) {
        zg1.style.display = "block";
        b.style.display = "block";
        dialogue.shrub = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.shrub === 1) {
        zg1.style.display = "none";
        zg2.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 2) {
        zg2.style.display = "none";
        zg3.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 3) {
        zg3.style.display = "none";
        zg4.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 4) {
        zg4.style.display = "none";
        zg5.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 5) {
        zg5.style.display = "none";
        zg6.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 6) {
        zg6.style.display = "none";
        zg7.style.display = "block";
        k.style.display = "block"; //So there's something about this shrub that the labyrinth is using to give us a clue about how to get further in?
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 7) {
        zg7.style.display = "none";
        zg8.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 8) {
        zg8.style.display = "none";
        zg9.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 9) {
        zg9.style.display = "none";
        zg10.style.display = "block";
        k.style.display = "block"; //It does kind of look like a numeral 7.
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 10) {
        zg10.style.display = "none";
        zg11.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 11) {
        zg11.style.display = "none";
        zg12.style.display = "block";
        k.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 12) {
        zg12.style.display = "none";
        zg13.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 13) {
        zg13.style.display = "none";
        zg14.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 14) {
        zg14.style.display = "none";
        zg15.style.display = "block"; //that is fucked up.
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 15) {
        zg15.style.display = "none";
        zg16.style.display = "block";
        b.style.display = "block";
        dialogue.labyrinthNames = false;
        tinkering.play();
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 16) {
        zg16.style.display = "none";
        zg17.style.display = "block";
        kstu.style.display = "block"; //wait did you hear that
        b.style.display = "none";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 17) {
        zg17.style.display = "none";
        zg18.style.display = "block";
        b.style.display = "block";
        kstu.style.display = "none";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 18) {
        zg18.style.display = "none";
        b.style.display = "none";
        dialogue.shrub = true;
        document.cookie = "shrubbery=shrubbery";
        notifnoise.play();
        increaseNotification();
        dialogue.blockArrowTravel = false;
          return;
      }
  }
}); 
    } 

}
}
function shrub2() {
  if (current.room === "hallway") {
    if (!dialogue.shrub && dialogue.verilyIntro && current.room === "hallway") {
        zg1.style.display = "block";
        b.style.display = "block";
        dialogue.shrub = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.shrub === 1) {
        zg1.style.display = "none";
        zg2.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 2) {
        zg2.style.display = "none";
        zg3.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 3) {
        zg3.style.display = "none";
        zg4.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 4) {
        zg4.style.display = "none";
        zg5.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 5) {
        zg5.style.display = "none";
        zg6.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 6) {
        zg6.style.display = "none";
        zg7.style.display = "block";
        k.style.display = "block"; //So there's something about this shrub that the labyrinth is using to give us a clue about how to get further in?
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 7) {
        zg7.style.display = "none";
        zg8.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 8) {
        zg8.style.display = "none";
        zg9.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 9) {
        zg9.style.display = "none";
        zh10.style.display = "block";
        k.style.display = "block"; //It does kind of look like a numeral 7.
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 10) {
        zh10.style.display = "none";
        zh11.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 11) {
        zh11.style.display = "none";
        zg12.style.display = "block";
        k.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 12) {
        zg12.style.display = "none";
        zg13.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 13) {
        zg13.style.display = "none";
        zg14.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 14) {
        zg14.style.display = "none";
        zg15.style.display = "block"; //that is fucked up.
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 15) {
        zg15.style.display = "none";
        b.style.display = "none";
        dialogue.shrub = true;
        dialogue.blockArrowTravel = false;
          return;
      }
  }
}); 
    }
    if (!dialogue.shrub && !dialogue.verilyIntro) {
        zg1.style.display = "block";
        b.style.display = "block";
        dialogue.shrub = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.shrub === 1) {
        zg1.style.display = "none";
        zg2.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 2) {
        zg2.style.display = "none";
        zg3.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 3) {
        zg3.style.display = "none";
        zg4.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 4) {
        zg4.style.display = "none";
        zg5.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 5) {
        zg5.style.display = "none";
        zg6.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 6) {
        zg6.style.display = "none";
        zg7.style.display = "block";
        k.style.display = "block"; //So there's something about this shrub that the labyrinth is using to give us a clue about how to get further in?
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 7) {
        zg7.style.display = "none";
        zg8.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 8) {
        zg8.style.display = "none";
        zg9.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 9) {
        zg9.style.display = "none";
        zh10.style.display = "block";
        k.style.display = "block"; //It does kind of look like a numeral 7.
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 10) {
        zh10.style.display = "none";
        zh11.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 11) {
        zh11.style.display = "none";
        zg12.style.display = "block";
        k.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 12) {
        zg12.style.display = "none";
        zg13.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 13) {
        zg13.style.display = "none";
        zg14.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 14) {
        zg14.style.display = "none";
        zg15.style.display = "block"; //that is fucked up.
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 15) {
        zg15.style.display = "none";
        zg16.style.display = "block";
        b.style.display = "block";
        tinkering.play();
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 16) {
        zg16.style.display = "none";
        zg17.style.display = "block";
        k.style.display = "block"; //wait did you hear that
        b.style.display = "none";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 17) {
        zg17.style.display = "none";
        zg18.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 18) {
        zg18.style.display = "none";
        b.style.display = "none";
        dialogue.shrub = true;
        dialogue.blockArrowTravel = false;
       notifnoise.play();
        increaseNotification();
          return;
      }
  }
}); 
    } 
}
}

function itsAFlowerPot() {
    if (!dialogue.flowerPotted){
       zzq1.style.display = "block";
       k.style.display = "block";
       dialogue.flowerPot = 1;
       dialogue.blockArrowTravel = true;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.flowerPot === 1) {
       zzq1.style.display = "none";
       zzq2.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.flowerPot++;
         return;
     } else if (dialogue.flowerPot === 2) {
       zzq2.style.display = "none";
       b.style.display = "none";
       dialogue.flowerPotted = true;
       dialogue.blockArrowTravel = false;
         return;
     }
 }
});
    }
}

function workingTogether() {
    if (dialogue.workingTogether && !dialogue.longTimeNoSeeSee) {
       zw1.style.display = "block";
       ksl.style.display = "block";
       dialogue.workingTogether = 1;
       dialogue.blockArrowTravel = true;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.workingTogether === 1) {
       zw1.style.display = "none";
       zw2.style.display = "block"; //to recap
       k.style.display = "block";
       ksl.style.display = "none";
       dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 2) {
       zw2.style.display = "none";
       zw3.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 3) {
       zw3.style.display = "none";
       zw4.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 4) {
       zw4.style.display = "none";
       zw5.style.display = "block";
       k.style.display = "none";
       b.style.display = "block"; //unless the labyrinth ...
       dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 5) {
       zw5.style.display = "none";
       zw6.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
       dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 6) {
       zw6.style.display = "none";
       zw7.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 7) {
       zw7.style.display = "none";
       zw8.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 8) {
       zw8.style.display = "none";
       zw9.style.display = "block";
       k.style.display = "block";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 9) {
       zw9.style.display = "none";
       zw10.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 10) {
       zw10.style.display = "none";
       zw11.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 11) {
       zw11.style.display = "none";
       zw12.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 12) {
       zw12.style.display = "none";
       zw13.style.display = "block";
       ksl.style.display = "block";
       b.style.display = "none";
              dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 13) {
       zw13.style.display = "none";
       ksl.style.display = "none";
       dialogue.workingTogether = false;
       if (!dialogue.actionAndInformationComplete) {
            dialogue.actionAndInformation = true;
       }
        //now verily is listening to music or working on her communicator
       verilyIs.inThePortholeRoom = true;
        verilysprite.style.display = "block";
        terminal2.style.display = "block";
        vtamp1.style.display = "none";
        vtamp2.style.display = "none";
        vtamp3.style.display = "none";
        dialogue.haventSeenHim = true;
       document.cookie = "workingTogether=workingTogether";
       dialogue.blockArrowTravel = false;
       //increasenotificationlobbytwo is accounted for at the end of longtimenosee
       //we don't play the noise hear because that would imply stymie2 is listening to their chasm(or other room adjacent to the lobby) conversation "to recap"
         return;
     }
 }
});
    }
}


function isSummerSuspicious() {
    if (dialogue.verilyIntro && !dialogue.upToSomething){
        zm1.style.display = "block";
       b.style.display = "block";
       dialogue.upToSomething = 1;
       dialogue.blockArrowTravel = true;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.upToSomething === 1) {
             dialogue.blockArrowTravel = true;
       zm1.style.display = "none";
       zm2.style.display = "block";
       ksl.style.display = "block"; //oh definitely
       b.style.display = "none";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 2) {
       zm2.style.display = "none";
       zm3.style.display = "block";
       ksl.style.display = "none";
       kstu.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 3) {
       zm3.style.display = "none";
       zm4.style.display = "block";
       kstu.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 4) {
       zm4.style.display = "none";
       zm5.style.display = "block";
              dialogue.blockArrowTravel = true;
       b.style.display = "block";
       kstu.style.display = "none";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 5) {
       zm5.style.display = "none";
       zm6.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 6) {
       zm6.style.display = "none";
              dialogue.blockArrowTravel = true;

       zm7.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 7) {
       zm7.style.display = "none";
       zm8.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 8) {
       zm8.style.display = "none";
       zm9.style.display = "block"; //well
       ksl.style.display = "block";
       k.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 9) {
             dialogue.blockArrowTravel = true;

       zm9.style.display = "none";
       zm10.style.display = "block";
       k.style.display = "block";
       ksl.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 10) {
       zm10.style.display = "none";
       zm11.style.display = "block";
       k.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 11) {
       zm11.style.display = "none";
       zm12.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 12) {
             dialogue.blockArrowTravel = true;

       zm12.style.display = "none";
       zm13.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 13) {
       zm13.style.display = "none";
       zm14.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething = 15;
         return;
     } else if (dialogue.upToSomething === 15) {
       zm14.style.display = "none";
       zm16.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 16) {
       zm16.style.display = "none";
       zm17.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 17) {
       zm17.style.display = "none";
       zm18.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 18) {
       zm18.style.display = "none";
       zm19.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 19) {
       zm19.style.display = "none";
       zm20.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 20) {
        zm20.style.display = "none";
        zm21.style.display = "block";
        k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 21) {
        zm21.style.display = "none";
        zm22.style.display = "block";
        k.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 22) {
       zm22.style.display = "none";
       zm23.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 23) {
       zm23.style.display = "none";
       zm24.style.display = "block";
       k.style.display = "block"; //right
       b.style.display = "none";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 24) {
       zm24.style.display = "none";
       zm25.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 25) {
       zm25.style.display = "none";
       zm26.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 26) {
       zm26.style.display = "none";
       zm27.style.display = "block"; //Speaking of the rope bridge...
       b.style.display = "block";
       k.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 27) {
             dialogue.blockArrowTravel = true;

       zm27.style.display = "none";
       zm28.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 28) {
       zm28.style.display = "none";
       zm29.style.display = "block";
       b.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 29) {
       zm29.style.display = "none";
       zm30.style.display = "block";
       b.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 30) {
       zm30.style.display = "none";
       zm31.style.display = "block";
       b.style.display = "none";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 31) {
       zm31.style.display = "none";
       zm32.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 32) {
       zm32.style.display = "none";
       b.style.display = "none";
       dialogue.upToSomething = true;
       dialogue.haventSeenHim = false;
       document.cookie = "suspect=suspect";
       dialogue.wowThisSummerCharacterHuh = true; //1/2 of the components to shuriEncounter
       dialogue.blockArrowTravel = false;
         return;
     }
 }
});
    }
}

function thatWasNotThereASecondAgo() {
    if (!dialogue.totallyNotThere) {
    yyn1.style.display = "block";
       k.style.display = "block";
       dialogue.thatWasNotThere = 1;
       dialogue.blockArrowTravel = true;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.thatWasNotThere === 1) {
    yyn1.style.display = "none";
       k.style.display = "none";
       dialogue.totallyNotThere = true;
       dialogue.blockArrowTravel = false;
     }}}); 
    }
}

function itsSomeSortOfPanelInTheWall(){
    zzh1.style.display = "block";
       k.style.display = "block";
       dialogue.itsSomeSortOfPanel = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.itsSomeSortOfPanel === 1) {
    zzh1.style.display = "none";
       k.style.display = "none";
         return;
     }}}); 
}
 
//chapter 3 beginning 
function onwardsAndInwards() { //mark may be uneeded duplicate 
    if (dialogue.verilyIntro && !dialogue.onwardAndInward){
        zzr1.style.display = "block";
       b.style.display = "block";
       dialogue.onwardAndInward = 1;
       dialogue.blockArrowTravel = true;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.onwardAndInward === 1) {
       zzr1.style.display = "none";
       zzr2.style.display = "block";
       ksl.style.display = "block";
       b.style.display = "none";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 2) {
       zzr2.style.display = "none";
       zzr3.style.display = "block";
       ksl.style.display = "none";
       kstu.style.display = "block";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 3) {
       zzr3.style.display = "none";
       zzr4.style.display = "block";
       kstu.style.display = "block";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 4) {
       zzr4.style.display = "none";
       zzr5.style.display = "block";
       b.style.display = "block";
       kstu.style.display = "none";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 5) {
       zzr5.style.display = "none";
       zzr6.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 6) {
       zzr6.style.display = "none";
       zzr7.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 7) {
       zzr7.style.display = "none";
       zzr8.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 8) {
       zzr8.style.display = "none";
       zzr9.style.display = "block"; //well
       ksl.style.display = "block";
       k.style.display = "none";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 9) {
       zzr9.style.display = "none";
       zzr10.style.display = "block";
       k.style.display = "block";
       ksl.style.display = "none";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 10) {
       zzr10.style.display = "none";
       zzr11.style.display = "block";
       k.style.display = "block";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 11) {
       zzr11.style.display = "none";
       zzr12.style.display = "block";
       k.style.display = "block";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 12) {
       zzr12.style.display = "none";
       zzr13.style.display = "block";
       k.style.display = "block";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 13) {
       zzr13.style.display = "none";
       zzr14.style.display = "block";
       k.style.display = "block";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 14) {
       zzr14.style.display = "none";
       zzr15.style.display = "block";
       k.style.display = "block";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 15) {
       zzr15.style.display = "none";
       zzr16.style.display = "block";
       k.style.display = "block";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 16) {
       zzr16.style.display = "none";
       zzr17.style.display = "block";
       k.style.display = "block";
       dialogue.onwardAndInward = false;
       dialogue.blockArrowTravel = false;
     }
 }
});
    }
}


function areWeFucked() {
if (!dialogue.byJoveJovent && !key.rope2 && !dialogue.beenfollowinguscomplete) {
       yyk1.style.display = "block"; //oh fuck
       b.style.display = "block";
       dialogue.byJoveJove = 1;
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.byJoveJove === 1) {
        yyk1.style.display = "none";
        b.style.display = "none";
        dialogue.byJoveJovent = true;
        dialogue.byJoveJove = false;
        dialogue.blockArrowTravel = false;
        dialogue.byJovesBeenJoved = false;

 }}});
    } else if (key.rope2) {
        throwRope2();
    } else if (!dialogue.byJovesBeenJoved) {
        dialogue.tooFarFarfar = 1;
       yym2.style.display = "block"; //it's too far to jump
       b.style.display = "block";
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.tooFarFarfar === 1) {
        yym2.style.display = "none";
       b.style.display = "none";
        dialogue.byJovesBeenJoved = false;
        dialogue.tooFarFarfar = true;
        dialogue.tooFarFar = true;
        dialogue.blockArrowTravel = false;
     } 
   }});
    } 
}

function comingBackIntoTheSquareLiftRoomAfterBridgeCut() {
    if (!dialogue.byJoveJoveJoveJove) {
        if (dialogue.byJoveJoveJove) {
            doihmot.pause();
            laudaNovella.play();
            setTimeout(function() {restartDoIhMotAfterLaudaNovella();}, 136000);
                dialogue.blockArrowTravel = true;
dialogue.byJoveJove2 = 1;
       yyk3.style.display = "block";
       kwtf.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.byJoveJove2 === 1) {
        yyk3.style.display = "none";
        yyk4.style.display = "block";
        kstu.style.display = "block";
        kwtf.style.display = "none";
        dialogue.byJoveJove2++;
         return;
     } else if (dialogue.byJoveJove2 === 2) {
        yyk4.style.display = "none";
        yyk5.style.display = "block";
        kstu.style.display = "block";
         dialogue.byJoveJove2++;
         return;
     }  else if (dialogue.byJoveJove2 === 3) {
        yyk5.style.display = "none";
        yyk6.style.display = "block";
        kwtf.style.display = "block";
        kstu.style.display = "none";
         dialogue.byJoveJove2++;
         return;
     }  else if (dialogue.byJoveJove2 === 4) {
        yyk6.style.display = "none";
        yyk7.style.display = "block";
        kwtf.style.display = "none";
        bfur.style.display = "block";
         dialogue.byJoveJove2++;
         return;
     }  else if (dialogue.byJoveJove2 === 5) {
        yyk7.style.display = "none";
        yyk8.style.display = "block";
        bfur.style.display = "none";
        bpiss.style.display = "block";
         dialogue.byJoveJove2++;
         return;
     }  else if (dialogue.byJoveJove2 === 6) {
        yyk8.style.display = "none";
        yyk9.style.display = "block"; //following US???
        bpiss.style.display = "none";
        kflip2.style.display = "block";
         dialogue.byJoveJove2++;
         return;
     }  else if (dialogue.byJoveJove2 === 7) {
        yyk9.style.display = "none";
        kflip2.style.display = "none";
         dialogue.byJoveJove2 = false;
         dialogue.byJoveJoveJoveJove = true;
         dialogue.ropeCanBeDiscovered1 = true;
         dialogue.blockArrowTravel = false;
         dialogue.beenfollowinguscomplete = true;
         
     } 
    }});
    }}
}

function successfullyPlacedPipeDialogue() {
    if (!dialogue.itFitsPerfectly) {
    dialogue.yesPipe = 1;
    k.style.display = "block";
    zzfit1.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.yesPipe === 1) {
           zzfit1.style.display = "none";
           k.style.display = "none";
           dialogue.itFitsPerfectly = true;
           dialogue.blockArrowTravel = false;
           return;
       } 
 } });
}
}


function weNeedAPipeSegmentThatWillFitThisGap() {
    if (!dialogue.pipeSlot) {
    dialogue.noPipe = 1;
    b.style.display = "block";
    zzt0.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.noPipe === 1) {
           zzt0.style.display = "none";
           b.style.display = "none";
           dialogue.pipeSlot3 = true;
           dialogue.pipeSlot = true;
           dialogue.blockArrowTravel = false;
           return;
       } 
 } });
    } else if (dialogue.pipeSlotA) {
    dialogue.noPipe2 = 1;
    b.style.display = "block";
    zzt1.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.noPipe2 === 1) {
           zzt1.style.display = "none";
           b.style.display = "none";
           dialogue.pipeSlot2 = true;
           dialogue.blockArrowTravel = false;
           dialogue.pipeSlotA = false;
           return;
       } 
 } });
    } else if (dialogue.pipeSlot2) {
    dialogue.noPipe3 = 1;
    b.style.display = "block";
    zzt2.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.noPipe3 === 1) {
           zzt2.style.display = "none";
           b.style.display = "none";
           dialogue.blockArrowTravel = false;
           return;
       } 
 } });
    } else if (dialogue.pipeSlot3) {
    dialogue.noPipe4 = 1;
    b.style.display = "block";
    zzt3.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.noPipe4 === 1) {
           zzt3.style.display = "none";
           b.style.display = "none";
           dialogue.pipeSlot2 = true;
           dialogue.pipeSlot3 = false;
           dialogue.blockArrowTravel = false;
           return;
       } 
 } });
    }}
 
function itsASecretMessageInAStrangeLanguage() {
  mapmini.style.display = "none";
  dialogue.secretpoem = "pickles";
    dialogue.blockArrowTravel = true;
    poem1.style.display = "block";
    document.body.style.background = "#000";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.secretpoem === "pickles") {
        bnoba.style.display = "block";
        yyu1.style.display = "block";
          dialogue.secretpoem = 1;
           return;
       } else if (dialogue.secretpoem === 1) {
        bnoba.style.display = "block";
           yyu1.style.display = "none";
           yyu2.style.display = "block";
           bnoba.style.display = "block";
          dialogue.secretpoem++;
           return;
       } else if (dialogue.secretpoem === 2) {
            yyu2.style.display = "none";
           yyu2a.style.display = "block";
           ksl2noba.style.display = "block";
           bnoba.style.display = "none";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 3) {
            yyu2a.style.display = "none";
           yyu3.style.display = "block";
           knoba.style.display = "block";
           ksl2noba.style.display = "none";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 4) {
            yyu3.style.display = "none";
           yyu4.style.display = "block";
           bnoba.style.display = "block";
           knoba.style.display = "none";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 5) {
            yyu4.style.display = "none";
           yyu5.style.display = "block";
           knoba.style.display = "block";
           bnoba.style.display = "none";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 6) {
            yyu5.style.display = "none";
           yyu6.style.display = "block";
           knoba.style.display = "block";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 7) {
            yyu6.style.display = "none";
           yyu7.style.display = "block";
           knoba.style.display = "block";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 8) {
            yyu7.style.display = "none";
           yyu8.style.display = "block";
           ksl2noba.style.display = "block";
            knoba.style.display = "none";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 9) {
            yyu8.style.display = "none";
           yyu9.style.display = "block";
           knoba.style.display = "block";
           ksl2noba.style.display = "none";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 10) {
            yyu9.style.display = "none";
           yyu10.style.display = "block";
           bnoba.style.display = "block";
           knoba.style.display = "none";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 11) {
            yyu10.style.display = "none";
           yyu11.style.display = "block";
           bnoba.style.display = "block";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 12) {
            yyu11.style.display = "none";
           bnoba.style.display = "none";
          dialogue.secretpoem++;
       }  else if (dialogue.secretpoem === 13) {
            yyu11.style.display = "none";
           bnoba.style.display = "none";
          dialogue.secretpoem = true;
          poem1.style.display = "none";
          mapmini.style.display = "block";
          document.cookie = "poem1found=poem1found";
          document.body.style.background = "#f5f1e0"; //hex code back to beige
          dialogue.poemAddedToNotebook = true;
          dialogue.blockArrowTravel = false;
       } 
 } });

}

function strangePaintingsConvo() {
   dialogue.spainting = 1;
    b.style.display = "block";
    if (dialogue.secretPaintingPassageDiscovered) {
      yyx1.style.display = "block";
    } else {
      yyx1a.style.display = "block";
    }
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.spainting === 1) {
           yyx1.style.display = "none";
           yyx1a.style.display = "none";
           yyx2.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.spainting++;
           return;
       } else if (dialogue.spainting === 2) {
           yyx2.style.display = "none";
           yyx3.style.display = "block";
           k.style.display = "none";
           b.style.display = "block";
              dialogue.spainting++;
           return;
       } else if (dialogue.spainting === 3) {
           yyx3.style.display = "none";
           yyx4.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.spainting++;
           return;
       } else if (dialogue.spainting === 4) {
           yyx4.style.display = "none";
           yyx5.style.display = "block";
           if (dialogue.secondPaintingIsRed) {
           paintingcheckred.style.display = "block";
           } else {
              paintingcheckblue.style.display = "block";
           }
           paintingRemoveClonk.play();
           k.style.display = "none";
           b.style.display = "block";
              dialogue.spainting++;
           return;
       }else if (dialogue.spainting === 5) {
           yyx5.style.display = "none";
           yyx6.style.display = "block";
           k.style.display = "none";
           b.style.display = "block";
              dialogue.spainting++;
           return;
       }else if (dialogue.spainting === 6) {
           yyx6.style.display = "none";
           yyx7.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.spainting++;
           return;
       }else if (dialogue.spainting === 7) {
           yyx7.style.display = "none";
           yyx8.style.display = "block";
           k.style.display = "none";
           b.style.display = "block";
              dialogue.spainting++;
           return;
       }else if (dialogue.spainting === 8) {
           yyx8.style.display = "none";
           yyx9.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.spainting++;
           return;
       } else if (dialogue.spainting === 9) {
           yyx9.style.display = "none";
           k.style.display = "none";
           kdemcheese.style.display = "block";
              dialogue.spainting++;
           return;
       } else if (dialogue.spainting === 10) {
           kdemcheese.style.display = "none";
           paintingcheckred.style.display = "none";
           paintingcheckblue.style.display = "none";
           paintingRemoveClonk.play();
              dialogue.spainting = true;
              dialogue.cheeseAndHamSandwich = true;
              dialogue.blockArrowTravel = false;
       }
      }});
}



function thatsNotRight() {
   dialogue.spaisdfnting = 1;
    b.style.display = "block";
    yyy1.style.display = "block";
  paintingRemoveClonk.play();
if (dialogue.secondPaintingIsRed) {
           paintingcheckred.style.display = "block";
           } else {
              paintingcheckblue.style.display = "block";
           }
               dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.spaisdfnting === 1) {
           yyy1.style.display = "none";
           b.style.display = "none";
              dialogue.spaisdfnting = true;
              paintingRemoveClonk.play();
              paintingcheckred.style.display = "none";
              paintingcheckblue.style.display = "none";
                  dialogue.blockArrowTravel = false;
       }
      }})
}

function nowTheyMatchMatch() {
  if (!dialogue.matchSetComplete) {
   dialogue.ssdfdsfsdfdf = 1;
    b.style.display = "block";
    if (dialogue.cheeseAndHamSandwich) {
      yyy2.style.display = "block";
    } else {
      yyy3.style.display = "block";
    }
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.ssdfdsfsdfdf === 1) {
           yyy2.style.display = "none";
           yyy3.style.display = "none";
           b.style.display = "none";
          dialogue.ssdfdsfsdfdf = true;
            dialogue.blockArrowTravel = false;
          dialogue.nowTheyMatch = true;
          dialogue.matchSetComplete = true;
          document.cookie = "paintingPassageLakes=paintingPassageLakes";
          
       }
      }});
    }
}

function itWontBudge() {
  if (current.room === "paintingReferenceRoom") {
    lockeddoor.play();
    northknock.style.display = "block";
                    setTimeout(function() {
                    northknock.style.display = "none";
                    }, 1000);
   dialogue.budgebudge = 1;
    b.style.display = "block";
    yba1.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.budgebudge === 1) {
           yba1.style.display = "none";
           b.style.display = "none";
          dialogue.budgebudge = true;
            dialogue.blockArrowTravel = false;
       }
      }});
  } else if (current.room === "pillarControlLakes") {
   dialogue.budgebudge2 = 1;
    b.style.display = "block";
    ybb1.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.budgebudge2 === 1) {
           ybb1.style.display = "none";
           b.style.display = "none";
          dialogue.budgebudge2 = true;
            dialogue.blockArrowTravel = false;
       }
      }});
  }
}

function illLeaveYouHere() {
    dialogue.herehere = 1;
    b.style.display = "block";
      if (current.room === "boatRoom") {
          ybd1.style.display = "block";
      } else {
          ybc1.style.display = "block";
      }
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
      if (event.key === 'Enter' || event.key === ' ') {
          if (dialogue.herehere === 1) {
              ybc1.style.display = "none";
              ybd1.style.display = "none";
              brun.style.display = "block";
              b.style.display = "none";
              dialogue.herehere++;
          } else if (dialogue.herehere === 2) {
              ybc2.style.display = "block";
              brun.style.display = "none";
              b.style.display = "block";
              dialogue.herehere++;
          } else if (dialogue.herehere === 3) {
              ybc2.style.display = "none";
              b.style.display = "none";
              dialogue.herehere = true;
              dialogue.blockArrowTravel = false;
              if (current.room === "boatRoom") {
                  dialogue.bearboat = true;
              } else {
                  dialogue.bearbyss = true;
                  randomDoorAudio();
                pipesLobby.style.display = "none";
                chasm2.style.display = "block";
                current.room = "chasm2";  
                sixteenFeralRacoons();
              }
          }
          }});
  }

function illLeaveYouHereKodalyInput() { //brunhilda
    dialogue.hereherehere = 1;
    b.style.display = "block";
      if (current.room === "boatRoom") {
          ybd1.style.display = "block";
      } else {
          ybc1.style.display = "block";
      }
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
      if (event.key === 'Enter' || event.key === ' ') {
          if (dialogue.hereherehere === 1) {
              ybc1.style.display = "none";
              ybd1.style.display = "none";
              b.style.display = "none";
              ybcd3.style.display = "block";
              brun.style.display = "none";
              k.style.display = "block";
              dialogue.hereherehere++;
          } else if (dialogue.hereherehere === 2) {
              brun.style.display = "block";
              k.style.display = "none";
              ybcd3.style.display = "none";
              dialogue.hereherehere++;
          } else if (dialogue.hereherehere === 3) {
              brun.style.display = "none";
              dialogue.hereherehere = true;
              dialogue.blockArrowTravel = false;
              dialogue.bearboat = true;
              if (current.room === "boatRoom") {
                      boatRoom.style.display = "none";
                      lake.style.display = "block";
                      current.room = "lake";  
                      boatMove.play();
              } else {
                randomDoorAudio();
                pipesLobby.style.display = "none";
                chasm2.style.display = "block";
                current.room = "chasm2";  
                sixteenFeralRacoons();
              }
          }
          }});
  }



function takeCareOfBrunhilda() {
    dialogue.highscores = 1;
    b.style.display = "block";
    yyz1.style.display = "block";
    dialogue.blockArrowTravel = true;
    explorersteddybear.style.display = "none";
    teddybearwaiting1.style.display = "block";
    placeTeddyBear.play();
    dialogue.explorersteddybearworn = false;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.highscores === 1) {
           yyz1.style.display = "none";
           yyz2.style.display = "block";
           b.style.display = "block";
              dialogue.highscores++;
           return;
       } else if (dialogue.highscores === 2) {
           yyz2.style.display = "none";
           yyz3.style.display = "block";
           b.style.display = "none";
           st.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 3) {
           yyz3.style.display = "none";
           yyz4.style.display = "block";
           b.style.display = "none";
           st.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 4) {
           yyz4.style.display = "none";
           yyz5.style.display = "block";
           st.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 5) {
           yyz5.style.display = "none";
           yyz6.style.display = "block";
           st.style.display = "none";
           b.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 6) {
           yyz6.style.display = "none";
           yyz7.style.display = "block";
           b.style.display = "none";
           st.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 7) {
           yyz7.style.display = "none";
           yyz8.style.display = "block";
           st.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 8) {
           yyz8.style.display = "none";
           yyz9.style.display = "block";
           st.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 9) {
          yyz9.style.display = "none";
          yyz10.style.display = "block";
           st.style.display = "block";
              dialogue.highscores++;
      } else if (dialogue.highscores === 10) {
          booting.play();
           yyz10.style.display = "none";
           st.style.display = "none";
           terminalcloseup.style.display = "block";
            namingbuttons.style.display = "block";
           unlighting.style.display = "block";
           dialogue.currentlyInputtingArcadeName = true;
           dialogue.blockArrowTravel = true;
            dialogue.preventI = true;
            dialogue.preventN = true;
            dialogue.highscores = true;
            dialogue.listenForEnter = true;
            dialogue.explorersteddybearworn = false;
              dialogue.brunhildaIsInLobbyThree = true;
              document.cookie = "brunhilda=brunhilda";
              dialogue.preventM = true;
              mapmini.style.display = "none";
       } 
      }})
}

function goodChoiceOfName() {
  mapmini.style.display = "block";
  yyz11.style.display = "block";
           st.style.display = "block";
      dialogue.dfgdfgkjdfjkgnalal = 1;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.dfgdfgkjdfjkgnalal === 1) {
           yyz12.style.display = "block";
          scorename.style.display = "none";
           yyz11.style.display = "none";
           st.style.display = "block";
              dialogue.dfgdfgkjdfjkgnalal++;
       } else if (dialogue.dfgdfgkjdfjkgnalal === 2) {
           yyz12.style.display = "none";
           st.style.display = "none";
           highscores.style.display = "block";
            scorename.style.display = "block"; //unused, as the scoreboard is one of two static images
              dialogue.dfgdfgkjdfjkgnalal++;
       } else if (dialogue.dfgdfgkjdfjkgnalal === 3) {
           yyz13.style.display = "block";
            highscores.style.display = "none";
                       scorename.style.display = "none";
           b.style.display = "block";
              dialogue.dfgdfgkjdfjkgnalal++;
       } else if (dialogue.dfgdfgkjdfjkgnalal === 4) {
           yyz14.style.display = "block";
           yyz13.style.display = "none";
           b.style.display = "none";
           st.style.display = "block";
              dialogue.dfgdfgkjdfjkgnalal++;
       } else if (dialogue.dfgdfgkjdfjkgnalal === 5) {
           yyz14.style.display = "none";
           yyz15.style.display = "block";
           b.style.display = "block";
           st.style.display = "none";
              dialogue.dfgdfgkjdfjkgnalal++;
       } else if (dialogue.dfgdfgkjdfjkgnalal === 6) {
           yyz15.style.display = "none";
           b.style.display = "none";
              dialogue.dfgdfgkjdfjkgnalal = true;
                  dialogue.blockArrowTravel = false;
                  decreaseNotificationLobbyThree();
                  dialogue.preventM = false;
       }
      }});
}

function illGiveYouOneOfMine() {
  mapmini.style.display = "block";
yyz16.style.display = "block";
st.style.display = "block";
      dialogue.dfgdfgkjdfjkgnalal = 1;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.dfgdfgkjdfjkgnalal === 1) {
           yyz16.style.display = "none";
           yyz17.style.display = "block";
           st.style.display = "block";
              dialogue.dfgdfgkjdfjkgnalal++;
       } else if (dialogue.dfgdfgkjdfjkgnalal === 2) {
           yyz17.style.display = "none";
           yyz18.style.display = "block";
           st.style.display = "none";
           b.style.display = "block"; //that's four letters??
              dialogue.dfgdfgkjdfjkgnalal = 33;
       } else if (dialogue.dfgdfgkjdfjkgnalal === 33) {
           yyz18.style.display = "none";
           b.style.display = "none";
           highscores2.style.display = "block";
           //scorename.style.display = "block";
              dialogue.dfgdfgkjdfjkgnalal = 3;
       } else if (dialogue.dfgdfgkjdfjkgnalal === 3) {
           yyz13.style.display = "block";
            highscores2.style.display = "none";
                    //scorename.style.display = "none";
           b.style.display = "block";
              dialogue.dfgdfgkjdfjkgnalal++;
       } else if (dialogue.dfgdfgkjdfjkgnalal === 4) {
                   yyz13.style.display = "none";   
        yyz14.style.display = "block";
           b.style.display = "none";
           st.style.display = "block";
              dialogue.dfgdfgkjdfjkgnalal++;
       } else if (dialogue.dfgdfgkjdfjkgnalal === 5) {
           yyz14.style.display = "none";
           yyz15.style.display = "block";
           b.style.display = "block";
           st.style.display = "none";
              dialogue.dfgdfgkjdfjkgnalal++;
       } else if (dialogue.dfgdfgkjdfjkgnalal === 6) {
           yyz15.style.display = "none";
           b.style.display = "none";
              dialogue.dfgdfgkjdfjkgnalal = true;
                  dialogue.blockArrowTravel = false;
                  decreaseNotificationLobbyThree();
                  dialogue.preventM = false;
       }
      }});
}

function iDontThinkICanFitThroughThat() {
  dialogue.dsfsdfdfg = 1;
    b.style.display = "block";
    ybe1.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.dsfsdfdfg === 1) {
           ybe1.style.display = "none";
           b.style.display = "none";
              dialogue.dsfsdfdfg = true;
                  dialogue.blockArrowTravel = false;
       }}});
} 

function noPowerFlowing() {
  zzg1.style.display = "block";
  k.style.display = "block";
  dialogue.noPillarPower = 1;
  dialogue.blockArrowTravel = true;
  document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.noPillarPower === 1) {
      zzg1.style.display = "none";
      k.style.display = "none";
      dialogue.blockArrowTravel = false;
      dialogue.noPillarPower = true;
     }}}); 
    }

  function willUnlockForColor() {
    if (!dialogue.asdfsadfd) {
    ybee1.style.display = "block";
    b.style.display = "block";
    dialogue.cojdlnaslf = 1;
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.cojdlnaslf === 1) {
        ybee1.style.display = "none";
        ybee2.style.display = "block";
        b.style.display = "block";
        dialogue.cojdlnaslf++;
      } else if (dialogue.cojdlnaslf === 2) {
        ybee2.style.display = "none";
        b.style.display = "none";
        dialogue.blockArrowTravel = false;
        dialogue.cojdlnaslf = true;
        dialogue.asdfsadfd = true;
      }
    }});
  } else if  (dialogue.asdfsadfd && conductiveFlowers.green) {
    ybee2b.style.display = "block";
    b.style.display = "block";
    dialogue.cojdlnaasddsfsdfslf = 1;
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.cojdlnaasddsfsdfslf === 1) {
        ybee2b.style.display = "none";
        b.style.display = "none";
        dialogue.cojdlnaasddsfsdfslf = true;
        dialogue.blockArrowTravel = false;
      }
    }});
  } else if  (dialogue.asdfsadfd && !conductiveFlowers.green) {
    ybee2.style.display = "block";
    b.style.display = "block";
    dialogue.cojdlnasdfslf = 1;
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.cojdlnasdfslf === 1) {
        ybee2.style.display = "none";
        b.style.display = "none";
        dialogue.cojdlnasdfslf = true;
        dialogue.blockArrowTravel = false;
      }
    }});
  }
  }


  function willUnlockForColorFlowers() {
    if (!dialogue.havetoclosecircuits) {
    ybee3.style.display = "block";
    b.style.display = "block";
    dialogue.cojdlnaslasdf = 1;
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.cojdlnaslasdf === 1) {
        ybee3.style.display = "none";
        b.style.display = "none";
         dialogue.blockArrowTravel = false;
        dialogue.cojdlnaslasdf = true;
        dialogue.havetoclosecircuits = true;
        dialogue.havetoclosecircuits2 = true;
      }
    }});
  } else if (dialogue.havetoclosecircuits2) {
    ybee4.style.display = "block";
    b.style.display = "block";
    dialogue.cojdlnasadfasdfslasdf = 1;
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.cojdlnasadfasdfslasdf === 1) {
        ybee4.style.display = "none";
        b.style.display = "none";
         dialogue.blockArrowTravel = false;
        dialogue.cojdlnasadfasdfslasdf = true;
      }
    }});
  }
  }

  //soldier confrontation
  function itsAnArbalest() {
    if (!dialogue.itsAnArbalest) {
        ybf1.style.display = "block";
        kstu.style.display = "block";
        dialogue.cojdlndfgdfgaslasdf = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
          if (dialogue.cojdlndfgdfgaslasdf === 1) {
            ybf1.style.display = "none";
            ybf2.style.display = "block";
            k.style.display = "block";
            kstu.style.display = "none";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 2) {
            ybf2.style.display = "none";
            ybf3.style.display = "block";
            kstu.style.display = "block";
            k.style.display = "none"; 
            shuriHallBack.style.display = "none";
            dialogue.cojdlndfgdfgaslasdf = "crime";
            crossbowRaise.play();
            shuriHall.style.display = "block";
          }  else if (dialogue.cojdlndfgdfgaslasdf === "crime") {
            ybf3.style.display = "none";
            ybf4.style.display = "block";
            kstu.style.display = "none";
            sharbra.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf = 53;
          }   else if (dialogue.cojdlndfgdfgaslasdf === 53) {
            ybf4.style.display = "none";
            ybf5.style.display = "block";
            kstu.style.display = "block";
            sharbra.style.display = "none";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 54) {
            ybf5.style.display = "none";
            ybf6.style.display = "block";
            sharbra.style.display = "block";
            kstu.style.display = "none";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 55) {
            ybf6.style.display = "none";
            ybf7.style.display = "block";
            crossbowLower.play();
            sharb.style.display = "block"; //it is an arbalest
            sharbra.style.display = "none";
            dialogue.cojdlndfgdfgaslasdf++;
          }  else if (dialogue.cojdlndfgdfgaslasdf === 56) {
            ybf7.style.display = "none";
            ybf8b.style.display = "block";
            sharb.style.display = "block"; //...
            dialogue.cojdlndfgdfgaslasdf++;
          }   else if (dialogue.cojdlndfgdfgaslasdf === 57) {
            ybf9b.style.display = "block";
            crossbowRaise.play();
           ybf8b.style.display = "none"; //leave at once
            sharb.style.display = "none";
            sharbra.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 58) {
            ybf9b.style.display = "none";
            ybf10b.style.display = "block";
            sharbra.style.display = "none";
            kstu.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 59) {
            ybf10b.style.display = "none";
            ybf8.style.display = "block";
            kstu.style.display = "none";
            k.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 60) {
            ybf8.style.display = "none";
            ybf9.style.display = "block";
            k.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf = 8;
          }  else if (dialogue.cojdlndfgdfgaslasdf === 8) {
            ybf9.style.display = "none";
            ybf10.style.display = "block";
            k.style.display = "none";
            sharbra.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 9) {
            ybf10.style.display = "none";
            ybf11.style.display = "block";
            sharbra.style.display = "block"; //you seek the ladder
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 10) {
            ybf11.style.display = "none";
            ybf12.style.display = "block";
            bfur.style.display = "block";
            sharbra.style.display = "none";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 11) {
            ybf12.style.display = "none";
            ybf13.style.display = "block";
            b.style.display = "block";
            bfur.style.display = "none";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 12) {
            ybf13.style.display = "none";
            ybf14.style.display = "block";
            b.style.display = "none";
            sharbra.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 13) {
            ybf14.style.display = "none";
            ybf15.style.display = "block";
            sharbra.style.display = "none";
            sharb.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 14) {
            ybf15.style.display = "none";
            ybf17.style.display = "block";
            kin.style.display = "block";
            sharb.style.display = "none";
            randomDoorAudio();
            shuriHall.style.display = "none";
            dialogue.cojdlndfgdfgaslasdf = 16;
          }  else if (dialogue.cojdlndfgdfgaslasdf === 16) {
            ybf17.style.display = "none";
            ybf18.style.display = "block";
            kin.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 17) {
            ybf18.style.display = "none";
            ybf19.style.display = "block";
            kin.style.display = "none";
            ksl.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 18) {
            ybf19.style.display = "none";
            ybf20.style.display = "block";
            ksl.style.display = "none";
            bfur.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 19) {
            ybf20.style.display = "none";
            ybf21.style.display = "block";
            bfur.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 20) {
            ybf21.style.display = "none";
            ybf22.style.display = "block";
            bfur.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 21) {
            ybf22.style.display = "none";
            ybf23.style.display = "block";
            bfur.style.display = "none";
            bpiss.style.display = "block";
            dialogue.cojdlndfgdfgaslasdf++;
          } else if (dialogue.cojdlndfgdfgaslasdf === 22) {
            ybf23.style.display = "none";
            bpiss.style.display = "none";
            dialogue.cojdlndfgdfgaslasdf = true;
            dialogue.itsAnArbalest = true;
            dialogue.blockArrowTravel = false;
          }
        }});
      }
  }

  function arbalestAttack() {
    ybg1.style.display = "block";
    b.style.display = "block";
    dialogue.cojdassdfsdflasdf = 1;
    crossbowFire.play();
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.cojdassdfsdflasdf === 1) {
        ybg1.style.display = "none";
        ybg2.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
    dangerZone.style.display = "none";
    interChapterHallway.style.display = "block";
    current.room = "interChapterHallway";
    randomDoorAudio();   
    dialogue.cojdassdfsdflasdf++;
      } else if (dialogue.cojdassdfsdflasdf === 2) {
        ybg2.style.display = "none";
        ybg3.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
         dialogue.cojdassdfsdflasdf++;
      } else if (dialogue.cojdassdfsdflasdf === 3) {
        ybg3.style.display = "none";
        b.style.display = "none";
        dialogue.blockArrowTravel = false;
        dialogue.cojdlnasadfasdfslasdf = true;
        dialogue.arbalestAttack = true;
         
      }
    }});

             
    
  }

  function iDontThinkThatsAGoodIdeaRightNow() {
      ybg4.style.display = "block";
      b.style.display = "block";
       dialogue.liftilskdmfklngUp = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.liftilskdmfklngUp === 1) {
       ybg4.style.display = "none";
        b.style.display = "none";
       dialogue.liftilskdmfklngUp = true;
     } }});
  }


  function weShouldRestFirst() {
      ybbi4.style.display = "block";
      b.style.display = "block";
       dialogue.liftilskdmfklngUp = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.liftilskdmfklngUp === 1) {
       ybbi4.style.display = "none";
        b.style.display = "none";
              ybbi4.style.display = "none"; //mark not noning
       dialogue.liftilskdmfklngUp = true;
     } }});
  }

    function iWentUp() {
       c1.style.display = "block";
      ksta.style.display = "block";
       dialogue.liftingUp = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.liftingUp === 1) {
       c1.style.display = "none";
       c2.style.display = "block";
        ksta.style.display = "none";
      k.style.display = "block";
       dialogue.liftingUp++;
         return;
     } else if (dialogue.liftingUp === 2) {
       c2.style.display = "none";
       c3.style.display = "block";
       b.style.display = "block";
       k.style.display = "none"; //so it would seem
         dialogue.liftingUp++;
         return;
     } else if (dialogue.liftingUp === 3) {
       c3.style.display = "none";
       b.style.display = "none";
       dialogue.liftingUp = true;
     }
  }
}); 
    }


    function iWonderWhatElseThisThingCanDo() {
       c1.style.display = "block";
      ksta.style.display = "block";
       dialogue.liftingUp = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.liftingUp === 1) {
       c1.style.display = "none";
       c2.style.display = "block";
        ksta.style.display = "none";
      k.style.display = "block";
       dialogue.liftingUp++;
         return;
     } else if (dialogue.liftingUp === 2) {
       c2.style.display = "none";
       c3.style.display = "block";
       b.style.display = "block";
       k.style.display = "none"; //so it would seem
         dialogue.liftingUp++;
         return;
     } else if (dialogue.liftingUp === 3) {
       c3.style.display = "none";
       c4.style.display = "block";
       b.style.display = "none";
       k.style.display = "block";
       dialogue.liftingUp++;
        return;
     } else if (dialogue.liftingUp === 4) {
       c4.style.display = "none";
       c5.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.liftingUp++;
        return;
     } else if (dialogue.liftingUp === 5) {
       c5.style.display = "none";
       b.style.display = "none";
       dialogue.liftingUp = true;
     }
  }
}); 
    }

    function strangeAndMysteriousVial() {
      ccc1.style.display = "block";
      b.style.display = "block";
      dialogue.karsdsdffak = 1;
      document.addEventListener("keydown", function() {
      if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.karsdsdffak === 1) {
       ccc1.style.display = "none";
       ccc2.style.display = "block";
      b.style.display = "block";
       dialogue.karsdsdffak++;
     } else if (dialogue.karsdsdffak === 2) {
       ccc2.style.display = "none";
        ccc3.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
       dialogue.karsdsdffak++;
     } else if (dialogue.karsdsdffak === 3) {
       ccc3.style.display = "none";
        ccc4.style.display = "block";
      k.style.display = "none";
      b.style.display = "block";
       dialogue.karsdsdffak++;
     } else if (dialogue.karsdsdffak === 4) {
       ccc4.style.display = "none";
        ccc5.style.display = "block";
      kdrink.style.display = "block";
      b.style.display = "none";
       dialogue.karsdsdffak++;
     } else if (dialogue.karsdsdffak === 5) {
       ccc5.style.display = "none";
        ccc6.style.display = "block";
      kdrink.style.display = "none";
      ksul2.style.display = "block";
       dialogue.karsdsdffak++;
     }  else if (dialogue.karsdsdffak === 6) {
        ccc6.style.display = "none";
      ksul2.style.display = "none";
       dialogue.karsdsdffak = true;
     }
    }});
    }


    function theresAPassageToTheSouth() {
      if (!dialogue.boatboatboatboat) {
      yfdjk1.style.display = "block";
             dialogue.blockArrowTravel = true;
      ksta.style.display = "block";
      dialogue.karsdfak = 1;
      document.addEventListener("keydown", function() {
      if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.karsdfak === 1) {
       yfdjk1.style.display = "none";
       yfdjk2.style.display = "block";
      b.style.display = "block";
      ksta.style.display = "none";
       dialogue.karsdfak++;
         return;
     } else if (dialogue.karsdfak === 2) {
       yfdjk2.style.display = "none";
      b.style.display = "none";
       dialogue.karsdfak = true;
       dialogue.blockArrowTravel = false;
        dialogue.labyrinthHasGrown = true;
        dialogue.boatboatboatboat = true;
     }}});
    }
    }

    function karakKyalMadeTheLabyrinthAndMagicIsReal() {
       ybg5.style.display = "block";
      vcon.style.display = "block";
       dialogue.karak = 1;
              dialogue.blockArrowTravel = true;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.karak === 1) {
       ybg5.style.display = "none";
       ybg6.style.display = "block";
      k.style.display = "block";
      vcon.style.display = "none";
       dialogue.karak++;
         return;
     } else if (dialogue.karak === 2) {
       ybg6.style.display = "none";
       ybg7.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.karak++;
         return;
     } else if (dialogue.karak === 3) {
       ybg7.style.display = "none";
       ybg8.style.display = "block";
       b.style.display = "none";
       vcon.style.display = "block";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 4) {
       ybg8.style.display = "none";
       ybg9.style.display = "block";
       vcon.style.display = "block";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 5 && dialogue.arbalestAttack) {
       ybg9.style.display = "none";
       ybg10a.style.display = "block";
       k.style.display = "block";
       vcon.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 5 && !dialogue.arbalestAttack) {
       ybg9.style.display = "none";
       ybg10b.style.display = "block";
       k.style.display = "block";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 6) {
       ybg10a.style.display = "none";
       ybg10b.style.display = "none";
       ybg11.style.display = "block";
       k.style.display = "block";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 7) {
       ybg11.style.display = "none";
       ybg12.style.display = "block";
       k.style.display = "block";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 8) {
       ybg12.style.display = "none";
       ybg13.style.display = "block";
       vcon.style.display = "block";
       k.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 9) {
       ybg13.style.display = "none";
       ybg14.style.display = "block";
       vcon.style.display = "block";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 10) {
       ybg14.style.display = "none";
       ybg15.style.display = "block";
       b.style.display = "block";
       vcon.style.display = "none";
       dialogue.karak = 12;
        return;
     } else if (dialogue.karak === 12) {
       ybg15.style.display = "none";
       ybg17.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 13) {
       ybg17.style.display = "none";
       ybg18.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 14) {
       ybg18.style.display = "none";
       ybg19.style.display = "block";
       vint.style.display = "block";
       b.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 15) {
       ybg19.style.display = "none";
       ybg20.style.display = "block";
       b.style.display = "block";
       vint.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 16) {
       ybg20.style.display = "none";
       ybg21.style.display = "block";
       vint.style.display = "block";
       b.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 17) {
       ybg21.style.display = "none";
       ybg22.style.display = "block";
       b.style.display = "block";
       vint.style.display = "none";
       dialogue.karak = "pickles";
        return;
     } else if (dialogue.karak === "pickles") {
       ybg22.style.display = "none";
       ybg23.style.display = "block";
       vint.style.display = "block";
       b.style.display = "none";
       dialogue.karak = 18;
        return;
     } else if (dialogue.karak === 18) {
       ybg23.style.display = "none";
       ybg24.style.display = "block";
       b.style.display = "block";
       vint.style.display = "none";
       dialogue.karak = 20;
        return;
     } else if (dialogue.karak === 20) {
       ybg24.style.display = "none";
       ybg25.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 21) {
       ybg25.style.display = "none";
       ybg26.style.display = "block";
       b.style.display = "block";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 22) {
       ybg26.style.display = "none";
       ybg27.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 23) {
       ybg27.style.display = "none";
       ybg28.style.display = "block";
       b.style.display = "block";
       vint.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 24) {
       ybg28.style.display = "none";
       ybg29.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.karak = 26;
        return;
     } else if (dialogue.karak === 26) {
       ybg29.style.display = "none";
       ybg30.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 27) {
       ybg30.style.display = "none";
       ybg31.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 28) {
       ybg31.style.display = "none";
       ybg32.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 29) {
       ybg32.style.display = "none";
       ybg33.style.display = "block";
       b.style.display = "block";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 30) {
       ybg33.style.display = "none";
       ybg34.style.display = "block";
       b.style.display = "block";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 31) {
       ybg34.style.display = "none";
       ybg35.style.display = "block";
       b.style.display = "block";
       dialogue.karak++;
     } else if (dialogue.karak === 32) {
       ybg35.style.display = "none";
       ybg36.style.display = "block";
       v.style.display = "block";
       b.style.display = "none";
       dialogue.karak = 39;
        return;
     } else if (dialogue.karak === 39) {
       ybg36.style.display = "none";
       ybg37.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.karak = "memes";
        return;
     } else if (dialogue.karak === "memes") {
       ybg37.style.display = "none";
       ybg38.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.karak = "memess";
        return;
     } else if (dialogue.karak === "memess") {
       ybg38.style.display = "none";
       ybg44.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.karak = "memeses";
        return;
     } else if (dialogue.karak === "memeses") {
       ybg44.style.display = "none";
       ybg45.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.karak = 40;
        return;
     } else if (dialogue.karak === 40) {
       ybg45.style.display = "none";
       ybg46.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 41) {
       ybg46.style.display = "none";
       ybg47.style.display = "block";
       vint.style.display = "block";
       b.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 42) {
       ybg47.style.display = "none";
       ybg48.style.display = "block";
       b.style.display = "block";
       vint.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 43) {
       ybg48.style.display = "none";
       ybg49.style.display = "block";
       bfur.style.display = "block";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 44) {
       ybg49.style.display = "none";
       ybg50.style.display = "block";
       bfur.style.display = "block";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 45) {
       ybg50.style.display = "none";
       ybg53.style.display = "block";
       v.style.display = "block";
       b.style.display = "none";
       bfur.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 46) {
       ybg53.style.display = "none";
       ybg54.style.display = "block";
       v.style.display = "block";
       dialogue.karak = 49;
        return;
     } else if (dialogue.karak === 49) {
       ybg54.style.display = "none";
       ybg55.style.display = "block";
       k.style.display = "block";
       vrel.style.display = "none";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 50) {
       ybg55.style.display = "none";
       ybg56.style.display = "block";
       k.style.display = "block";
       v.style.display = "none";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 51) {
       ybg56.style.display = "none";
       ybg57.style.display = "block";
       k.style.display = "block";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 52) {
       ybg57.style.display = "none";
       ybg58.style.display = "block";
       k.style.display = "block";
       dialogue.karak++;
        return;
     } else if (dialogue.karak === 53) {
       ybg58.style.display = "none";
       k.style.display = "none";
       dialogue.karak = true;
       dialogue.karakKyal = true;
       dialogue.verilyHasJoinedTheParty = true;
       document.cookie = "karakKyal=karakKyal";
       trio.style.display = "block";
      verilyhelper.style.display = "block";
       verilyheardsomething.style.display = "none";
              dialogue.blockArrowTravel = false;

     } 
  }
}); 
    }

    function shallWeCallItADay() {
             dialogue.blockArrowTravel = true;
      ybbi1.style.display = "block";
      b.style.display = "block";
       dialogue.sdfsdfjdkjdksfgggggkfdg = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.sdfsdfjdkjdksfgggggkfdg === 1) {
       yesorno.style.display = "block";
        ybbi1.style.display = "none";
      b.style.display = "none";
       dialogue.sdfsdfjdkjdksfgggggkfdg = true;
     }
    }});
    }

    function keepExploring() {
        exitcloseup.play();
             yesorno.style.display = "none";
              dialogue.blockArrowTravel = false;
    }

    function makeCamp() {
      exitcloseup.play();
      dialogue.highportk = true;
            yesorno.style.display = "none";
            trio.style.display = "none";
            verilyhelper.style.display = "none";
            explorers.style.display = "none";
            campers1.style.display = "block";
            ybboo1.style.display = "block";
            k.style.display = "block";
            saltarello.volume = 0.8;
      ybboo1.style.display = "block";
      k.style.display = "block";
       dialogue.sdfsdfggkldfklfklfggpgpopop = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.sdfsdfggkldfklfklfggpgpopop === 1) {
       ybboo1.style.display = "none";
       ybboo2.style.display = "block";
      k.style.display = "none";
      kdrow.style.display = "block";
      saltarello.volume = 0.6;
      dialogue.sdfsdfggkldfklfklfggpgpopop++;
     } else if (dialogue.sdfsdfggkldfklfklfggpgpopop === 2) {
       ybboo2.style.display = "none";
       ybboo3.style.display = "block";
      kdrow.style.display = "none";
      kdrow2.style.display = "block";
      saltarello.volume = 0.4;
      dialogue.sdfsdfggkldfklfklfggpgpopop++;
     } else if (dialogue.sdfsdfggkldfklfklfggpgpopop === 3) {
       ybboo3.style.display = "none";
       ybboo4.style.display = "block";
       campers1.style.display = "none";
       campers2.style.display = "block";
      kdrow2.style.display = "none";
      kzonk.style.display = "block";
      saltarello.volume = 0.2;
      dialogue.sdfsdfggkldfklfklfggpgpopop++;
     } else if (dialogue.sdfsdfggkldfklfklfggpgpopop === 4) {
       ybboo4.style.display = "none";
       ybboo5.style.display = "block";
      kzonk.style.display = "none";
      b.style.display = "block";
      saltarello.volume = 0.1;
      branleChampaigne.play();
      branleChampaigne.volume = 0.1;
       setTimeout(function() {startCarmanAfterChampaigne();}, 131000);  
      dialogue.sdfsdfggkldfklfklfggpgpopop++;
     } else if (dialogue.sdfsdfggkldfklfklfggpgpopop === 5) {
       ybboo5.style.display = "none";
       ybboo6.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
      saltarello.pause();
            branleChampaigne.volume = 0.3;
      dialogue.sdfsdfggkldfklfklfggpgpopop++;
     } else if (dialogue.sdfsdfggkldfklfklfggpgpopop === 6) {
       ybboo6.style.display = "none";
       ybboo7.style.display = "block";
      v.style.display = "none";
      b.style.display = "block";
      branleChampaigne.volume = 0.5;
      dialogue.sdfsdfggkldfklfklfggpgpopop++;
     } else if (dialogue.sdfsdfggkldfklfklfggpgpopop === 7) {
       ybboo7.style.display = "none";
       ybboo8.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
      branleChampaigne.volume = 0.7;
      dialogue.sdfsdfggkldfklfklfggpgpopop++;
     } else if (dialogue.sdfsdfggkldfklfklfggpgpopop === 8) {
       ybboo8.style.display = "none";
      v.style.display = "none";
      branleChampaigne.volume = 1;
      soldierFractal.style.display = "block";
      dialogue.sdfsdfggkldfklfklfggpgpopop = true;
     }
    }});
    }

    function weShouldSealTheDoor() {
      if (!dialogue.sdfsseadfgggggg) {  
               dialogue.blockArrowTravel = true;

      ybbh1.style.display = "block";
      k.style.display = "block";
       dialogue.sdfsdfgggggg = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.sdfsdfgggggg === 1) {
       ybbh1.style.display = "none";
      k.style.display = "none";
       dialogue.sdfsdfgggggg = true;
              dialogue.blockArrowTravel = false;

     }
    }});
  } else if (dialogue.sdfsseadfgggggg) {
           dialogue.blockArrowTravel = true;
      ybbh2.style.display = "block";
      k.style.display = "block";
       dialogue.sdfsdfavcbggsdfsdfsdfgggg = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.sdfsdfavcbggsdfsdfsdfgggg === 1) {
       ybbh2.style.display = "none";
      k.style.display = "none";
       dialogue.sdfsdfgggggg = true;
       dialogue.blockArrowTravel = false;
     }
    }});
  }
    }


function shelfBooks() {
    yfdjxvk1.style.display = "block";
      k.style.display = "block";
       dialogue.sdfsdfavcbgsdfgsdfsdfsdfgggg = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.sdfsdfavcbgsdfgsdfsdfsdfgggg === 1) {
       yfdjxvk1.style.display = "none";
      yfdjxvk1a.style.display = "block";
      k.style.display = "none";
      b.style.display = "block";
       dialogue.sdfsdfavcbgsdfgsdfsdfsdfgggg++;
     } else if (dialogue.sdfsdfavcbgsdfgsdfsdfsdfgggg === 2) {
       yfdjxvk1a.style.display = "none";
      b.style.display = "none";
       dialogue.sdfsdfavcbgsdfgsdfsdfsdfgggg = true;
     }
    }});
}

function shelfStones() {
  if (!dialogue.rocks) {
           dialogue.blockArrowTravel = true;

    yfdjxvk2.style.display = "block";
      k.style.display = "block";
       dialogue.sdfsdfmmgg = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.sdfsdfmmgg === 1) {
       yfdjxvk2.style.display = "none";
      k.style.display = "none";
       dialogue.sdfsdfmmgg = true;
       dialogue.rocks = true;
       dialogue.rocks2 = true;
              dialogue.blockArrowTravel = false;

     }
    }});
  } else if (dialogue.rocks2) {
           dialogue.blockArrowTravel = true;

    yfdjxvk3.style.display = "block";
      k.style.display = "block";
       dialogue.sdfsdfaaaaa = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.sdfsdfaaaaa === 1) {
       yfdjxvk3.style.display = "none";
       yfdjxvk3a.style.display = "block";
      k.style.display = "block";
       dialogue.sdfsdfaaaaa++;
     } else if (dialogue.sdfsdfaaaaa === 2) {
       yfdjxvk3a.style.display = "none";
      k.style.display = "none";
       dialogue.sdfsdfaaaaa = true;
       dialogue.rocks2 = false;
       dialogue.rocks3 = true;
              dialogue.blockArrowTravel = false;

     } 
    }});}
    else if (dialogue.rocks3) {
             dialogue.blockArrowTravel = true;
    yfdjxvk4.style.display = "block";
      b.style.display = "block";
       dialogue.sdfsdfaaannmcxnvaa = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.sdfsdfaaannmcxnvaa === 1) {
       yfdjxvk4.style.display = "none";
       yfdjxvk5.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
       dialogue.sdfsdfaaannmcxnvaa++;
     } else if (dialogue.sdfsdfaaannmcxnvaa === 2) {
       yfdjxvk5.style.display = "none";
       yfdjxvk6.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
       dialogue.sdfsdfaaannmcxnvaa++;
     } else if (dialogue.sdfsdfaaannmcxnvaa === 3) {
       yfdjxvk6.style.display = "none";
       yfdjxvk7.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
       dialogue.sdfsdfaaannmcxnvaa++;
     } else if (dialogue.sdfsdfaaannmcxnvaa === 4) {
       yfdjxvk7.style.display = "none";
      k.style.display = "none";
       dialogue.sdfsdfaaannmcxnvaa = true;
       dialogue.rocks3 = false;
       dialogue.rocks4 = true;
              dialogue.blockArrowTravel = false;

     }
    }});
  } else if (dialogue.rocks4) {
dialogue.blockArrowTravel = true;
    yfdjxvk8.style.display = "block";
      b.style.display = "block";
       dialogue.sdfsdfaasdaannmcxnvaa = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.sdfsdfaasdaannmcxnvaa === 1) {
       yfdjxvk8.style.display = "none";
       yfdjxvk9.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
       dialogue.sdfsdfaasdaannmcxnvaa++;
     } else if (dialogue.sdfsdfaasdaannmcxnvaa === 2) {
       yfdjxvk9.style.display = "none";
       yfdjxvk10.style.display = "block";
      bfur.style.display = "block";
      k.style.display = "none";
       dialogue.sdfsdfaasdaannmcxnvaa++;
     } else if (dialogue.sdfsdfaasdaannmcxnvaa === 3) {
       yfdjxvk10.style.display = "none";
       yfdjxvk11.style.display = "block";
      bfur.style.display = "none";
      b.style.display = "block";
       dialogue.sdfsdfaasdaannmcxnvaa++;
     }  else if (dialogue.sdfsdfaasdaannmcxnvaa === 4) {
       yfdjxvk11.style.display = "none";
       yfdjxvk12.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
       dialogue.sdfsdfaasdaannmcxnvaa++;
     }  else if (dialogue.sdfsdfaasdaannmcxnvaa === 5) {
       yfdjxvk12.style.display = "none";
       yfdjxvk13.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
       dialogue.sdfsdfaasdaannmcxnvaa++;
     }  else if (dialogue.sdfsdfaasdaannmcxnvaa === 6) {
       yfdjxvk13.style.display = "none";
       yfdjxvk14.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
       dialogue.sdfsdfaasdaannmcxnvaa++;
     } else if (dialogue.sdfsdfaasdaannmcxnvaa === 7) {
       yfdjxvk14.style.display = "none";
      k.style.display = "none";
       dialogue.sdfsdfaasdaannmcxnvaa = true;
       dialogue.rocks4 = false;
              dialogue.blockArrowTravel = false;

     }
    }});
  }
}

function aNewOrchid() {
  console.log("I didn't end up writing anything for this function.") //or image-mapping it
}

function cantAllFitInThatBoat() {
   if (!dialogue.shouldntWeMakeCampNow) {
     dialogue.blockArrowTravel = true;
    ybcc1.style.display = "block";
      vint.style.display = "block";
       dialogue.dfgkjdfngkjdfnkgnaa = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfngkjdfnkgnaa === 1) {
       ybcc1.style.display = "none";
      vint.style.display = "none";
      ybcc2.style.display = "block";
      b.style.display = "block";
       dialogue.dfgkjdfngkjdfnkgnaa++;
     } else if (dialogue.dfgkjdfngkjdfnkgnaa === 2) {
       ybcc2.style.display = "none";
      b.style.display = "none";
      ybcc3.style.display = "block";
      v.style.display = "block";
       dialogue.dfgkjdfngkjdfnkgnaa++;
     }  else if (dialogue.dfgkjdfngkjdfnkgnaa === 3) {
       ybcc3.style.display = "none";
      ybcc4.style.display = "block";
      v.style.display = "block";
       dialogue.dfgkjdfngkjdfnkgnaa++;
     } else if (dialogue.dfgkjdfngkjdfnkgnaa === 4) {
       ybcc4.style.display = "none";
      v.style.display = "none";
      trio.style.display = "none";
      explorers.style.display = "block";
      verilywaiting.style.display = "block";
      ripples.style.display = "block";
       dialogue.dfgkjdfngkjdfnkgnaa = true;
       dialogue.blockArrowTravel = false;
       dialogue.shouldntWeMakeCampNow = true;
       document.cookie = "shouldntWeMakeCampNowAndNotBoat=shouldntWeMakeCampNowAndNotBoat";
     }
    }});
  } else if (dialogue.shouldntWeMakeCampNow) {
    randomOarAudio();    
                artMirrorRoom.style.display = "none";
                lakesLobby.style.display = "block";
                explorers.style.display = "block";
                current.room = "lakesLobby";        
                explorers.style.opacity = 0;  
                trio.style.display = "none";  
                verilywaiting.style.display = "block";  
                ripples.style.display = "block";  
  }
        
}

function verilyIsMakingTea() {
if (dialogue.verilyIsInLobbyThree) {
  if (!dialogue.makingTeaOne) {
    dialogue.blockArrowTravel = true;
    ybbl1.style.display = "block";
      k.style.display = "block";
       dialogue.dfgkjdfnjfjfjaamz = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfnjfjfjaamz === 1) {
       ybbl1.style.display = "none";
      ybbl2.style.display = "block";
      v.style.display = "block";
      k.style.display = "none";
       dialogue.dfgkjdfnjfjfjaamz++;
     } else if (dialogue.dfgkjdfnjfjfjaamz === 2) {
       ybbl2.style.display = "none";
      v.style.display = "none";
       dialogue.dfgkjdfnjfjfjaamz = true;
       dialogue.makingTeaOne = true;
       dialogue.makingTeaTwo = true;
     } 
    }});
  } else if (dialogue.makingTeaTwo) {
    dialogue.blockArrowTravel = true;
    ybbl3.style.display = "block";
      k.style.display = "block";
       dialogue.dfgkjdfndaamz = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfndaamz === 1) {
       ybbl3.style.display = "none";
      k.style.display = "none";
       dialogue.dfgkjdfndaamz = true;
       dialogue.makingTeaThree = true;
      dialogue.makingTeaTwo = false;
     }
    }});
  } else if (dialogue.makingTeaThree) {
    dialogue.blockArrowTravel = true;
    ybbl4.style.display = "block";
      k.style.display = "block";
       dialogue.dfgkjdfnjfdfgjfjaamz = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfnjfdfgjfjaamz === 1) {
       ybbl4.style.display = "none";
      ybbl5.style.display = "block";
      v.style.display = "block";
      k.style.display = "none";
       dialogue.dfgkjdfnjfdfgjfjaamz++;
     } else if (dialogue.dfgkjdfnjfdfgjfjaamz === 2) {
       ybbl5.style.display = "none";
      v.style.display = "none";
       dialogue.dfgkjdfnjfdfgjfjaamz = true;
       dialogue.makingTeaThree = false;
     } 
    }});
  } 
}
}

function campingStove() {
if (dialogue.verilyIsInLobbyThree) {
  if (!dialogue.teapotOne) {
    dialogue.blockArrowTravel = true;
    ybbm1.style.display = "block";
    b.style.display = "block";
    dialogue.dfgkjdfngsdmoomosd = 1;
    document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.dfgkjdfngsdmoomosd === 1) {
      ybbm1.style.display = "none";
      ybbm2.style.display = "block";
      v.style.display = "block";
      b.style.display = "none";
      dialogue.dfgkjdfngsdmoomosd++;
    } else if (dialogue.dfgkjdfngsdmoomosd === 2) {
      ybbm2.style.display = "none";
      v.style.display = "none";
      dialogue.dfgkjdfngsdmoomosd = true;
      dialogue.teapotOne = true;
      dialogue.teapotTwo = true;
    }
    }});
  } else if (dialogue.teapotTwo) {
    dialogue.blockArrowTravel = true;
    ybbm3.style.display = "block";
    v.style.display = "block";
    dialogue.dfgkjdmmvnnvbvvcd = 1;
    document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.dfgkjdmmvnnvbvvcd === 1) {
      ybbm3.style.display = "none";
      ybbm4.style.display = "block";
      b.style.display = "block";
      v.style.display = "none";
      dialogue.dfgkjdmmvnnvbvvcd++;
    } else if (dialogue.dfgkjdmmvnnvbvvcd === 2) {
      ybbm4.style.display = "none";
      ybbm5.style.display = "block";
      b.style.display = "block";
      dialogue.dfgkjdmmvnnvbvvcd++;
    } else if (dialogue.dfgkjdmmvnnvbvvcd === 3) {
      ybbm5.style.display = "none";
      ybbm6.style.display = "block";
      b.style.display = "block";
      dialogue.dfgkjdmmvnnvbvvcd++;
    } else if (dialogue.dfgkjdmmvnnvbvvcd === 4) {
      ybbm6.style.display = "none";
      b.style.display = "none";
      dialogue.dfgkjdmmvnnvbvvcd = true;
      dialogue.teapotTwo = false;
    }
    }});
  }
}
}

function itsSomeVialsIGuess() {
  if (!dialogue.dfgkjdfngsdfsdfkxcvxcvjdfnkgnaa) {
dialogue.blockArrowTravel = true;
    ybbj1.style.display = "block";
      k.style.display = "block";
       dialogue.dfgkjdfngsdfsdfkjdfnkgnaa = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfngsdfsdfkjdfnkgnaa === 1) {
       ybbj1.style.display = "none";
      ybbj2.style.display = "block";
      k.style.display = "block";
       dialogue.dfgkjdfngsdfsdfkjdfnkgnaa++;
     } else if (dialogue.dfgkjdfngsdfsdfkjdfnkgnaa === 2) {
       ybbj2.style.display = "none";
      k.style.display = "none";
       dialogue.dfgkjdfngsdfsdfkxcvxcvjdfnkgnaa = true;
       dialogue.dfgkjdfngsdfsdfkjdfnkgnaa = true;
       dialogue.blockArrowTravel = false;
     }
    }});
  } else if (dialogue.dfgkjdfngsdfsdfkxcvxcvjdfnkgnaa) {
    dialogue.blockArrowTravel = true;
    ybbj2a.style.display = "block";
      k.style.display = "block";
       dialogue.dfgkjdfdkgnaa = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfdkgnaa === 1) {
       ybbj2a.style.display = "none";
      ybbj2b.style.display = "block";
      k.style.display = "block";
       dialogue.dfgkjdfdkgnaa++;
     } else if (dialogue.dfgkjdfdkgnaa === 2) {
       ybbj2b.style.display = "none";
      k.style.display = "none";
       dialogue.blockArrowTravel = false;
       dialogue.dfgkjdfdkgnaa = true;
     }
    }});
  }
    }

function solveVialsPuzzle() {
    if (!dialogue.vialPuzzleSolved) {
dialogue.blockArrowTravel = true;
    ybbj3.style.display = "block";
      b.style.display = "block";
       dialogue.dfgkjdfsdfammmmm = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfsdfammmmm === 1) {
       ybbj3.style.display = "none";
      ybbj4.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
       dialogue.dfgkjdfsdfammmmm++;
     } else if (dialogue.dfgkjdfsdfammmmm === 2) {
       ybbj4.style.display = "none";
      ybbj5.style.display = "block";
 k.style.display = "none";
      b.style.display = "block";
             dialogue.dfgkjdfsdfammmmm++;
     }  else if (dialogue.dfgkjdfsdfammmmm === 3) {
       ybbj5.style.display = "none";
      ybbj6.style.display = "block";
      k.style.display = "block";
            b.style.display = "none";
       dialogue.dfgkjdfsdfammmmm++;
     } else if (dialogue.dfgkjdfsdfammmmm === 4) {
       ybbj6.style.display = "none";
      ybbj7.style.display = "block";
      b.style.display = "block";
            k.style.display = "none";
       dialogue.dfgkjdfsdfammmmm++;
     }  else if (dialogue.dfgkjdfsdfammmmm === 5) {
       ybbj7.style.display = "none";
      b.style.display = "none";
      redvialwestshelf.style.display = "block";
      vialPloink.play();
       dialogue.dfgkjdfsdfammmmm = true;
       dialogue.blockArrowTravel = false;
       randomPillarGrind();
       dialogue.vialPuzzleSolved = true; 
       dialogue.hiddenDoorOpened = true; //now the door is open
       keyitems.style.display = "none";
       dialogue.vialPlaced = true;
       hiddendoor.style.display = "none";
       hiddendooropen.style.display = "block";
     }
    }});
  } else {
    dialogue.blockArrowTravel = true;
    ybbj8.style.display = "block";
      k.style.display = "block";
       dialogue.dfgkjdfsdfammsdfnkjmmm = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfsdfammsdfnkjmmm === 1) {
       ybbj8.style.display = "none";
      k.style.display = "none";
       dialogue.dfgkjdfsdfammsdfnkjmmm = true;
           dialogue.blockArrowTravel = false;
     }}});
  }
}

function theresAHiddenDoorHere() {
  if (!dialogue.seacretSeam) {
 dialogue.blockArrowTravel = true;
    ybbj9.style.display = "block";
      k.style.display = "block";
       dialogue.dfgkjdfsdfammsdfsdfsdfsdfnkjmmm = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfsdfammsdfsdfsdfsdfnkjmmm === 1) {
       ybbj9.style.display = "none";
      k.style.display = "none";
       dialogue.dfgkjdfsdfammsdfsdfsdfsdfnkjmmm = true;
           dialogue.blockArrowTravel = false;
           dialogue.seacretSeam = true;
     }}});
  } else if (dialogue.seacretSeam) {
    dialogue.blockArrowTravel = true;
    ybbj10.style.display = "block";
      k.style.display = "block";
       dialogue.dfgkjdfsdfddsdfsdfnkjmmm = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfsdfddsdfsdfnkjmmm === 1) {
       ybbj10.style.display = "none";
      k.style.display = "none";
       dialogue.dfgkjdfsdfddsdfsdfnkjmmm = true;
           dialogue.blockArrowTravel = false;
     }}});
  }
     
  }

function iDontThinkEitherOfUsAreSkinnyEnoughToFit() {
  if (!dialogue.skinnyOnce) {
    dialogue.blockArrowTravel = true;
    ybbk1.style.display = "block";
      b.style.display = "block";
       dialogue.dfgkjdfsmznmansmsabdmnsdfnkjmmm = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfsmznmansmsabdmnsdfnkjmmm === 1) {
       ybbk1.style.display = "none";
       ybbk2.style.display = "block";
      b.style.display = "none";
      k.style.display = "block";
      dialogue.dfgkjdfsmznmansmsabdmnsdfnkjmmm++;
     } else if (dialogue.dfgkjdfsmznmansmsabdmnsdfnkjmmm === 2) {
       ybbk2.style.display = "none";
       ybbk3.style.display = "block";
      k.style.display = "none";
      b.style.display = "block";
      dialogue.dfgkjdfsmznmansmsabdmnsdfnkjmmm++;
     } else if (dialogue.dfgkjdfsmznmansmsabdmnsdfnkjmmm === 3) {
       ybbk3.style.display = "none";
       ybbk4.style.display = "block";
      b.style.display = "none";
      k.style.display = "block";
      dialogue.dfgkjdfsmznmansmsabdmnsdfnkjmmm++;
     } else if (dialogue.dfgkjdfsmznmansmsabdmnsdfnkjmmm === 4) {
       ybbk4.style.display = "none";
       ybbk5.style.display = "block";
      k.style.display = "none";
      b.style.display = "block";
      dialogue.dfgkjdfsmznmansmsabdmnsdfnkjmmm++;
     }  else if (dialogue.dfgkjdfsmznmansmsabdmnsdfnkjmmm === 5) {
       ybbk5.style.display = "none";
       ybbk6.style.display = "block";
      b.style.display = "none";
      k.style.display = "block";
      dialogue.dfgkjdfsmznmansmsabdmnsdfnkjmmm++;
     } else if (dialogue.dfgkjdfsmznmansmsabdmnsdfnkjmmm === 6) {
       ybbk6.style.display = "none";
      k.style.display = "none";
       dialogue.dfgkjdfsmznmansmsabdmnsdfnkjmmm = true;
           dialogue.blockArrowTravel = false;
           dialogue.sawTheCrack = true;
           dialogue.skinnyOnce = true;
     }
    }});
  } else if (dialogue.skinnyOnce) {
    ybbk6a.style.display = "block";
    dialogue.blockArrowTravel = true;
      k.style.display = "block";
       dialogue.dfgkjdfsdfdffdfdfzzmmm = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfsdfdffdfdfzzmmm === 1) {
       ybbk6a.style.display = "none";
      k.style.display = "none";
      dialogue.dfgkjdfsdfdffdfdfzzmmm = true;
      dialogue.blockArrowTravel = false;
     }
    }});
  }
}

function verilyYouGoIntoTheMysteriousCrack() {
  if (!dialogue.verilyYouTryTheCrack && dialogue.sawTheCrack) {
dialogue.blockArrowTravel = true;
    ybbk7.style.display = "block";
      v.style.display = "block";
       dialogue.dfgkjdfsdfammsdfnkjmmm = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfsdfammsdfnkjmmm === 1) {
       ybbk7.style.display = "none";
       ybbk8.style.display = "block";
      k.style.display = "block";
      v.style.display = "none";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     } else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 2) {
       ybbk8.style.display = "none";
       ybbk9.style.display = "block";
      k.style.display = "none";
      b.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     } else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 3) {
       ybbk9.style.display = "none";
       ybbk10.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     } else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 4) {
       ybbk10.style.display = "none";
       ybbk11.style.display = "block";
      v.style.display = "none";
      b.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     }  else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 5) {
       ybbk11.style.display = "none";
       ybbk12.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     }   else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 6) {
       ybbk12.style.display = "none";
       ybbk13.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     }  else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 7) {
       ybbk13.style.display = "none";
       ybbk14.style.display = "block";
      v.style.display = "none";
      b.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     }  else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 8) {
       ybbk14.style.display = "none";
       ybbk15.style.display = "block";
      b.style.display = "none";
      k.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     } else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 9) {
       ybbk15.style.display = "none";
      k.style.display = "none";
       dialogue.dfgkjdfsdfammsdfnkjmmm = true;
           dialogue.blockArrowTravel = false;
           dialogue.verilyYouTryTheCrack = true;
  current.room = "cavernsOne";
cavernsOne.style.display = "block";
secretCrackRoom.style.display = "none";
baseroom.style.display = "none";
stachel.style.display = "none";
keyitems.style.display = "none";
trio.style.display = "none";
mapmini.style.display = "none";
     }
    }});
  } else if (!dialogue.verilyYouTryTheCrack && !dialogue.sawTheCrack) {
dialogue.blockArrowTravel = true;
    ybbk7.style.display = "block";
      v.style.display = "block";
       dialogue.dfgkjdfsdfammsdfnkjmmm = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.dfgkjdfsdfammsdfnkjmmm === 1) {
       ybbk7.style.display = "none";
       ybbk8alt.style.display = "block";
      b.style.display = "block";
      v.style.display = "none";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     } else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 2) {
       ybbk8alt.style.display = "none";
       ybbk9alt.style.display = "block";
      b.style.display = "none";
      k.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     } else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 3) {
       ybbk9alt.style.display = "none";
       ybbk10.style.display = "block";
      k.style.display = "none";
      v.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     } else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 4) {
       ybbk10.style.display = "none";
       ybbk11.style.display = "block";
      v.style.display = "none";
      b.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     }  else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 5) {
       ybbk11.style.display = "none";
       ybbk12.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     }   else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 6) {
       ybbk12.style.display = "none";
       ybbk13.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     }  else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 7) {
       ybbk13.style.display = "none";
       ybbk14.style.display = "block";
      v.style.display = "none";
      b.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     }  else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 8) {
       ybbk14.style.display = "none";
       ybbk15.style.display = "block";
      b.style.display = "none";
      k.style.display = "block";
      dialogue.dfgkjdfsdfammsdfnkjmmm++;
     } else if (dialogue.dfgkjdfsdfammsdfnkjmmm === 9) {
       ybbk15.style.display = "none";
      k.style.display = "none";
       dialogue.dfgkjdfsdfammsdfnkjmmm = true;
           dialogue.blockArrowTravel = false;
           dialogue.verilyYouTryTheCrack = true;
  current.room = "cavernsOne";
cavernsOne.style.display = "block";
secretCrackRoom.style.display = "none";
baseroom.style.display = "none";
stachel.style.display = "none";
keyitems.style.display = "none";
trio.style.display = "none";
mapmini.style.display = "none";

     }
    }});
  }
}

function noreasontogobackthereagain() {
dialogue.blockArrowTravel = true;
    pococo8.style.display = "block";
      b.style.display = "block";
       dialogue.rosdfcaaasddfgdfgfsdfki = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.rosdfcaaasddfgdfgfsdfki === 1) {
       pococo8.style.display = "none";
      b.style.display = "none";
       dialogue.rosdfcaaasddfgdfgfsdfki = true;
       dialogue.blockArrowTravel = false;
     }}});
}

function verilyWhatDidYouSee() {
  if (!dialogue.verilywhadyaseee) {
dialogue.blockArrowTravel = true;
    ybbkk0.style.display = "block";
      k.style.display = "block";
       dialogue.rosdfcsdfsdfki = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.rosdfcsdfsdfki === 1) {
       ybbkk0.style.display = "none";
       ybbkk1.style.display = "block";
      v.style.display = "block";
      k.style.display = "none";
       dialogue.rosdfcsdfsdfki++;
     } else if (dialogue.rosdfcsdfsdfki === 2) {
       ybbkk1.style.display = "none";
       ybbkk2.style.display = "block";
      ksl.style.display = "block";
      v.style.display = "none";
       dialogue.rosdfcsdfsdfki++;
     } else if (dialogue.rosdfcsdfsdfki === 3) {
       ybbkk2.style.display = "none";
       ybbkk3.style.display = "block";
      v.style.display = "block";
      ksl.style.display = "none";
       dialogue.rosdfcsdfsdfki++;
     } else if (dialogue.rosdfcsdfsdfki === 4) {
       ybbkk3.style.display = "none";
       ybbkk4.style.display = "block";
      k.style.display = "block";
      v.style.display = "none";
       dialogue.rosdfcsdfsdfki++;
     } else if (dialogue.rosdfcsdfsdfki === 5) {
       ybbkk4.style.display = "none";
       ybbkk5.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
       dialogue.rosdfcsdfsdfki++;
     } else if (dialogue.rosdfcsdfsdfki === 6) {
       ybbkk5.style.display = "none";
      b.style.display = "none";
       dialogue.rosdfcsdfsdfki = true;
       dialogue.verilywhadyaseee = true;
       dialogue.blockArrowTravel = false;
     }
    }});
  }}

function moreRockDialogue() {
  if (!dialogue.rocktalkOne) {
dialogue.blockArrowTravel = true;
    ybbn1.style.display = "block";
      b.style.display = "block";
       dialogue.rockin = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.rockin === 1) {
       ybbn1.style.display = "none";
      b.style.display = "none";
       dialogue.rockin = true;
           dialogue.blockArrowTravel = false;
           dialogue.rocktalkOne = true;
           dialogue.rocktalkTwo = true;
     }}});
  } else if (dialogue.rocktalkTwo) {
dialogue.blockArrowTravel = true;
    ybbn2.style.display = "block";
      b.style.display = "block";
       dialogue.rockin2 = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.rockin2 === 1) {
       ybbn2.style.display = "none";
       ybbn3.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
       dialogue.rockin2++;
     } else if (dialogue.rockin2 === 2) {
       ybbn3.style.display = "none";
       ybbn4.style.display = "block";
      k.style.display = "block";
       dialogue.rockin2++;
     } else if (dialogue.rockin2 === 3) {
       ybbn4.style.display = "none";
       ybbn5.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
       dialogue.rockin2++;
     } else if (dialogue.rockin2 === 4) {
       ybbn5.style.display = "none";
       ybbn6.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
       dialogue.rockin2++;
     } else if (dialogue.rockin2 === 5) {
       ybbn6.style.display = "none";
      k.style.display = "none";
       dialogue.rockin2 = true;
       dialogue.rocktalkTwo = false;
       dialogue.rocktalkThree = true;
     }
    }});
  } else if (dialogue.rocktalkThree) {
dialogue.blockArrowTravel = true;
    ybbn7.style.display = "block";
      b.style.display = "block";
       dialogue.rockin3 = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.rockin3 === 1) {
       ybbn7.style.display = "none";
       ybbn8.style.display = "block";
      b.style.display = "none";
      k.style.display = "block";
       dialogue.rockin3++;
     } else if (dialogue.rockin3 === 2) {
       ybbn8.style.display = "none";
       ybbn9.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
       dialogue.rockin3++;
     } else if (dialogue.rockin3 === 3) {
       ybbn9.style.display = "none";
      b.style.display = "none";
       dialogue.rockin3 = true;
           dialogue.blockArrowTravel = false;
           dialogue.rocktalkThree = false;
     }
    }});
  }
   
}

//end of chapter dialogue tree

function oneSoldier() {
exitcloseup.play();
soldierFractal.style.display = "none";
dialogue.sdmmmmmmmmmmmmmoop = true;
soldier();
}
function oneFractal() {
  exitcloseup.play();
soldierFractal.style.display = "none";
dialogue.fractalOne = true;
fractal();
}

function twoFractal() {
  exitcloseup.play();
fractalMagic.style.display = "none";
dialogue.magictoSleep = true;
fractal();
}
function twoMagic() {
  exitcloseup.play();
fractalMagic.style.display = "none";
dialogue.fractalSleep = true;
magic();
}


function twoSoldier() {
  exitcloseup.play();
soldierMagic.style.display = "none";
dialogue.theFunVariable = true;
soldier();
}
function twoMagictoSoldierSleep() {
  exitcloseup.play();
soldierMagic.style.display = "none";
dialogue.soldierSleep = true;
magic();
}

function soldierToSleep() {
  exitcloseup.play();
soldierSleep.style.display = "none";
dialogue.sleepSom = true;
soldier();
}
function magicToSleep() {
  exitcloseup.play();
magicSleep.style.display = "none";
dialogue.skjdMagincldSleeee = true;
magic();
}
function fractalToSleep() {
  exitcloseup.play();
fractalSleep.style.display = "none";
dialogue.francldsdlkDRosevelt = true;
fractal();
}

function goToSleep() {
  exitcloseup.play();
soldierSleep.style.display = "none";
fractalSleep.style.display = "none";
magicSleep.style.display = "none";
somesleep.style.display = "none";
sleep();
}

function fractal() {
      ybbo1.style.display = "block";
      b.style.display = "block";
      dialogue.kjsndfkjsdjjjjjsssjsjs = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.kjsndfkjsdjjjjjsssjsjs === 1) {
       ybbo1.style.display = "none";
       ybbo2.style.display = "block";
      b.style.display = "none";
      vint.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 2) {
       ybbo2.style.display = "none";
       ybbo3.style.display = "block";
      b.style.display = "block";
      vint.style.display = "none";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 3) {
      ybbo3.style.display = "none";
      kmap3.style.display = "block";
                  dialogue.allowMapEscape3 = true;
      b.style.display = "none";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 4) {
      kmap3.style.display = "none";
      ybbo4.style.display = "block";
                  dialogue.allowMapEscape3 = false;
      v.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 5) {
      ybbo4.style.display = "none";
      ybbo5.style.display = "block";
      v.style.display = "none";
      b.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 6) {
      ybbo5.style.display = "none";
      ybbo6.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 7) {
      ybbo6.style.display = "none";
      ybbo6a.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 8) {
      ybbo6a.style.display = "none";
      ybbo6b.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 9) {
      ybbo6b.style.display = "none";
      ybbo6c.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 10) {
      ybbo6c.style.display = "none";
      ybbo6d.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 11) {
      ybbo6d.style.display = "none";
      ybbo6e.style.display = "block";
      v.style.display = "none";
      b.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 12) {
      ybbo6e.style.display = "none";
      ybbo6f.style.display = "block";
      v.style.display = "none";
      b.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 13) {
      ybbo6f.style.display = "none";
      ybbo7.style.display = "block";
      b.style.display = "none";
      vrel.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 14) {
      ybbo7.style.display = "none";
      ybbo8.style.display = "block";
      v.style.display = "block";
      vrel.style.display = "none";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 15) {
      ybbo8.style.display = "none";
      ybbo9.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 16) {
      ybbo9.style.display = "none";
      ybbo10.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 17) {
      ybbo10.style.display = "none";
      ybbo10a.style.display = "block";
      v.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs = "gay"
     }  else if (dialogue.kjsndfkjsdjjjjjsssjsjs === "gay") {
      ybbo10a.style.display = "none";
      ybbo11.style.display = "block";
      v.style.display = "none";
      vrel.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs = 18
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 18) {
      ybbo11.style.display = "none";
      ybbo12.style.display = "block";
      vrel.style.display = "none";
      bpiss.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 19) {
      ybbo12.style.display = "none";
      ybbo13.style.display = "block";
      bpiss.style.display = "none";
      v.style.display = "block";
       dialogue.kjsndfkjsdjjjjjsssjsjs++;
     } else if (dialogue.kjsndfkjsdjjjjjsssjsjs === 20) {
      ybbo13.style.display = "none";
      v.style.display = "none";
       dialogue.kjsndfkjsdjjjjjsssjsjs = true;
            if (dialogue.fractalOne) {
      soldierMagic.style.display = "block";
       } else if (dialogue.magictoSleep) {
        magicSleep.style.display = "block";
       } else if (dialogue.francldsdlkDRosevelt) {
        somesleep.style.display = "block";
       }
     }
    }});
}
function magic() {
  ybbo16.style.display = "block";
      b.style.display = "block";
      dialogue.bzmxkqpwoieur = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzmxkqpwoieur === 1) {
       ybbo16.style.display = "none";
       ybbo17.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
       dialogue.bzmxkqpwoieur++;
     } else if (dialogue.bzmxkqpwoieur === 2) {
       ybbo17.style.display = "none";
       ybbo18.style.display = "block";
      b.style.display = "block";
      v.style.display = "none";
       dialogue.bzmxkqpwoieur++;
     } else if (dialogue.bzmxkqpwoieur === 3) {
      ybbo18.style.display = "none";
      ybbo19.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
       dialogue.bzmxkqpwoieur++;
     } else if (dialogue.bzmxkqpwoieur === 4) {
      ybbo19.style.display = "none";
      ybbo20.style.display = "block";
      v.style.display = "block";
       dialogue.bzmxkqpwoieur++;
     } else if (dialogue.bzmxkqpwoieur === 5) {
      ybbo20.style.display = "none";
      ybbo21.style.display = "block";
      v.style.display = "none";
      b.style.display = "block";
       dialogue.bzmxkqpwoieur++;
     } else if (dialogue.bzmxkqpwoieur === 6) {
      ybbo21.style.display = "none";
      ybbo22.style.display = "block";
      b.style.display = "block";
       dialogue.bzmxkqpwoieur++;
     } else if (dialogue.bzmxkqpwoieur === 7) {
      ybbo22.style.display = "none";
      ybbo23.style.display = "block";
      b.style.display = "block";
       dialogue.bzmxkqpwoieur++;
     } else if (dialogue.bzmxkqpwoieur === 8) {
      ybbo23.style.display = "none";
      ybbo24.style.display = "block";
      b.style.display = "block";
       dialogue.bzmxkqpwoieur++;
     } else if (dialogue.bzmxkqpwoieur === 9) {
      ybbo24.style.display = "none";
      ybbo25.style.display = "block";
      b.style.display = "none";
      vint.style.display = "block";
       dialogue.bzmxkqpwoieur++;
     } else if (dialogue.bzmxkqpwoieur === 10) {
      ybbo25.style.display = "none";
      ybbo26.style.display = "block";
      vint.style.display = "none";
      b.style.display = "block";
       dialogue.bzmxkqpwoieur++;
     } else if (dialogue.bzmxkqpwoieur === 11) {
      ybbo26.style.display = "none";
      ybbo27.style.display = "block";
      vint.style.display = "none";
      b.style.display = "block";
       dialogue.bzmxkqpwoieur++;
     } else if (dialogue.bzmxkqpwoieur === 12) {
      ybbo27.style.display = "none";
      ybbo28.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
       dialogue.bzmxkqpwoieur++;
     } else if (dialogue.bzmxkqpwoieur === 13) {
      ybbo28.style.display = "none";
      v.style.display = "none";
       dialogue.bzmxkqpwoieur = true;
      if (dialogue.soldierSleep) {
          soldierSleep.style.display = "block";
       } else if (dialogue.fractalSleep) {
        fractalSleep.style.display = "block";
        } else if (dialogue.skjdMagincldSleeee) {
        somesleep.style.display = "block";
        }
     }
}});
}
function soldier() {
  ybbo44.style.display = "block";
      vint.style.display = "block";
      dialogue.ranchDressing = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.ranchDressing === 1) {
       ybbo44.style.display = "none";
       ybbo45.style.display = "block";
      vint.style.display = "none";
      b.style.display = "block";
       dialogue.ranchDressing++;
     } else if (dialogue.ranchDressing === 2) {
       ybbo45.style.display = "none";
       ybbo46.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       if (dialogue.poemAddedToNotebook) {
dialogue.ranchDressing++;
       } else if (!dialogue.poemAddedToNotebook) {
dialogue.ranchDressing = "pickles";
       }
     }  else if (dialogue.ranchDressing === 3) {
       ybbo46.style.display = "none";
       ybbo47.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.ranchDressing++;
     }  else if (dialogue.ranchDressing === 4) {
       ybbo47.style.display = "none";
       ybbo48.style.display = "block";
       b.style.display = "none";
       v.style.display = "block";
       dialogue.ranchDressing++;
     }  else if (dialogue.ranchDressing === 5) {
             ybbo48.style.display = "none";
      if (!dialogue.dictionaryAdded) {
       ybbo49.style.display = "block";
      } else {
       ybbo49a.style.display = "block";
      }
       b.style.display = "block";
       v.style.display = "none";
       dialogue.ranchDressing++;
     }  else if (dialogue.ranchDressing === 6) {
       if (!dialogue.dictionaryAdded) {
       ybbo49.style.display = "none";
       ybbo50.style.display = "block";
      } else {
       ybbo49a.style.display = "none";
       ybbo49b.style.display = "block";
      }
       b.style.display = "block";
       v.style.display = "none";
       dialogue.ranchDressing++;
     }  else if (dialogue.ranchDressing === 7) {
      b.style.display = "none";
       v.style.display = "block";
      if (!dialogue.dictionaryAdded) {
       ybbo50.style.display = "none";
       ybbo51.style.display = "block";
       dialogue.ranchDressing++;
      } else {
       ybbo49b.style.display = "none";
       ybbo49c.style.display = "block";
        dialogue.ranchDressing = "pickles";
      }
     }  else if (dialogue.ranchDressing === 8) {
       ybbo51.style.display = "none";
       ybbo52.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.ranchDressing++;
     }  else if (dialogue.ranchDressing === 9) {
       ybbo52.style.display = "none";
       ybbo53.style.display = "block";
       b.style.display = "none";
       v.style.display = "block";
       dialogue.ranchDressing++;
     }  else if (dialogue.ranchDressing === 10) {
       ybbo53.style.display = "none";
       pocketDictionary.style.display = "block";
       dialogue.dictionaryAdded = true;
       b.style.display = "none";
       v.style.display = "none";
       dialogue.ranchDressing++;
     }
      else if (dialogue.ranchDressing === 11) {
       pocketDictionary.style.display = "none";
       ybbo54.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.ranchDressing++;
     }  else if (dialogue.ranchDressing === 12) {
       ybbo54.style.display = "none";
       ybbo55.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.ranchDressing++;
     }  else if (dialogue.ranchDressing === 13) {
       ybbo55.style.display = "none";
       ybbo56.style.display = "block";
       b.style.display = "none";
       v.style.display = "block";
       dialogue.ranchDressing++;
     }
     else if (dialogue.ranchDressing === 14) {
       ybbo56.style.display = "none";
       ybbo57.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.ranchDressing = "pickles";
     } else if (dialogue.ranchDressing === "pickles") {
       ybbo57.style.display = "none";
       ybbo49c.style.display = "none";
       ybbo46.style.display = "none";
      ybbo51.style.display = "none";
       b.style.display = "none";
       v.style.display = "none";
       dialogue.ranchDressing = true;
       dialogue.highporthelpervgoesawaynow = true;
  if (dialogue.theFunVariable) {
  magicSleep.style.display = "block";
  } else if (dialogue.sleepSom) {
somesleep.style.display = "block";
  } else if (dialogue.sdmmmmmmmmmmmmmoop) {
fractalMagic.style.display = "block";
  }
  }}});
}
function sleep() {
  ybbo30.style.display = "block";
      b.style.display = "block";
      dialogue.bzmxkdddqpwoieubr = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzmxkdddqpwoieubr === 1) {
       ybbo30.style.display = "none";
       ybbo31.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
       dialogue.bzmxkdddqpwoieubr++;
     } else if (dialogue.bzmxkdddqpwoieubr === 2) {
       ybbo31.style.display = "none";
       ybbo32.style.display = "block";
       v.style.display = "block";
       dialogue.bzmxkdddqpwoieubr = "pickles";
     } else if (dialogue.bzmxkdddqpwoieubr === "pickles") {
       ybbo32.style.display = "none";
       ybbo33.style.display = "block";
       v.style.display = "none";
      b.style.display = "block";
       dialogue.bzmxkdddqpwoieubr = 3;
     } else if (dialogue.bzmxkdddqpwoieubr === 3) {
      ybbo33.style.display = "none";
      ybbo34.style.display = "block";
      v.style.display = "none";
      b.style.display = "block";
       dialogue.bzmxkdddqpwoieubr++;
     } else if (dialogue.bzmxkdddqpwoieubr === 4) {
      ybbo34.style.display = "none";
      ybbo35.style.display = "block";
      b.style.display = "none";
      vint.style.display = "block";
       dialogue.bzmxkdddqpwoieubr++;
     } else if (dialogue.bzmxkdddqpwoieubr === 5) {
      ybbo35.style.display = "none";
      ybbo36.style.display = "block";
      vint.style.display = "none";
      b.style.display = "block";
       dialogue.bzmxkdddqpwoieubr++;
     } else if (dialogue.bzmxkdddqpwoieubr === 6) {
      ybbo36.style.display = "none";
      ybbo37.style.display = "block";
 b.style.display = "none";
      v.style.display = "block";
             dialogue.bzmxkdddqpwoieubr++;
     } else if (dialogue.bzmxkdddqpwoieubr === 7) {
      ybbo37.style.display = "none";
      ybbo38.style.display = "block";
      v.style.display = "block";
       dialogue.bzmxkdddqpwoieubr++;
     } else if (dialogue.bzmxkdddqpwoieubr === 8) {
      ybbo38.style.display = "none";
      ybbo39.style.display = "block";
      v.style.display = "none";
      b.style.display = "block";
       dialogue.bzmxkdddqpwoieubr++;
     } else if (dialogue.bzmxkdddqpwoieubr === 9) {
      ybbo39.style.display = "none";
      ybbo40.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
       dialogue.bzmxkdddqpwoieubr++;
     } else if (dialogue.bzmxkdddqpwoieubr === 10) {
      ybbo40.style.display = "none";
      ybbo41.style.display = "block";
      v.style.display = "block";
       dialogue.bzmxkdddqpwoieubr++;
     } else if (dialogue.bzmxkdddqpwoieubr === 11) {
      ybbo41.style.display = "none";
      ybbo42.style.display = "block";
      v.style.display = "block";
       dialogue.bzmxkdddqpwoieubr++;
     } else if (dialogue.bzmxkdddqpwoieubr === 12) {
      ybbo42.style.display = "none";
            v.style.display = "none";
       dialogue.bzmxkdddqpwoieubr = true;
       fadeOut();
     }
}});
}

function goDownChasm() {
  if (!dialogue.sdnfkjsd) {
    dialogue.blockArrowTravel = true;
  yagaga1.style.display = "block";
      b.style.display = "block";
      dialogue.bzmxkdddqpwfffoieubr = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzmxkdddqpwfffoieubr === 1) {
       yagaga1.style.display = "none";
      b.style.display = "none";
       dialogue.bzmxkdddqpwfffoieubr = true;
       dialogue.blockArrowTravel = false;
       dialogue.sdnfkjs = true;
     }}});
}
  }

  function thisIsReallyHard() {
  if (!dialogue.wowThisIsReallyHard) {
    dialogue.blockArrowTravel = true;
  yagagada1.style.display = "block";
      ksl.style.display = "block";
      dialogue.bzdfdfmzmmzeubr = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzdfdfmzmmzeubr === 1) {
       yagagada1.style.display = "none";
       yagagada2.style.display = "block";
      b.style.display = "block";
      ksl.style.display = "none";
       dialogue.bzdfdfmzmmzeubr++;
     } else if (dialogue.bzdfdfmzmmzeubr === 2) {
       yagagada2.style.display = "none";
      b.style.display = "none";
       dialogue.wowThisIsReallyHard = true;
       dialogue.blockArrowTravel = false;
       dialogue.bzdfdfmzmmzeubr = true;
     }
    }});
}
  }

function thesePillarsAreBlockingTheWay() {
  if (!dialogue.theseDogonePillars) {
    dialogue.blockArrowTravel = true;
  yakak1.style.display = "block";
      b.style.display = "block";
      dialogue.bzdfdfmzmmdddzeubra = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzdfdfmzmmdddzeubra === 1) {
       yakak1.style.display = "none";
      b.style.display = "none";
       dialogue.bzdfdfmzmmdddzeubra = true;
       dialogue.blockArrowTravel = false;
       dialogue.theseDogonePillars = true;
     }
    }});
} else if (dialogue.pillarControlLakeInteractedWith) {
    dialogue.blockArrowTravel = true;
  yakak3.style.display = "block";
      k.style.display = "block";
      dialogue.bzdfdfmadzeubra = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzdfdfmadzeubra === 1) {
       yakak3.style.display = "none";
      k.style.display = "none";
       dialogue.bzdfdfmadzeubra = true;
       dialogue.blockArrowTravel = false;
     }
    }});
} else if (dialogue.neeblings) {
  dialogue.blockArrowTravel = true;
  yakak2.style.display = "block";
      k.style.display = "block";
      dialogue.bzdfdfmzmmdddddddzeubra = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzdfdfmzmmdddddddzeubra === 1) {
       yakak2.style.display = "none";
      k.style.display = "none";
       dialogue.bzdfdfmzmmdddddddzeubra = true;
       dialogue.blockArrowTravel = false;
     }
    }});
} 
}

function thisMustBePaint() {
  if (dialogue.needleteetles2) {
  dialogue.blockArrowTravel = true;
  yakaka4.style.display = "block";
      b.style.display = "block";
      dialogue.bzdfdfddmqwedda = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzdfdfddmqwedda === 1) {
       yakaka4.style.display = "none";
      b.style.display = "none";
       dialogue.bzdfdfddmqwedda = true;
       dialogue.blockArrowTravel = false;
     }
    }});
} else if (!dialogue.needleteetles && dialogue.beenInArtMirrorRoom) {
  dialogue.blockArrowTravel = true;
  yakaka0.style.display = "block";
      k.style.display = "block";
      dialogue.bzdfdfmzmmdddddddzeubrdddda = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzdfdfmzmmdddddddzeubrdddda === 1) {
       yakaka0.style.display = "none";
      k.style.display = "none";
       dialogue.bzdfdfmzmmdddddddzeubrdddda = true;
       dialogue.blockArrowTravel = false;
       dialogue.needleteetles = true;
     }
    }});
} else if (dialogue.needleteetles) {
  dialogue.blockArrowTravel = true;
  yakaka1.style.display = "block";
      k.style.display = "block";
      dialogue.bzdffnxnrdda = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzdffnxnrdda === 1) {
       yakaka1.style.display = "none";
      k.style.display = "none";
       yakaka2.style.display = "block";
      b.style.display = "block";
      dialogue.bzdffnxnrdda++;
     } else if (dialogue.bzdffnxnrdda === 2) {
       yakaka2.style.display = "none";
      b.style.display = "none";
       yakaka3.style.display = "block";
      k.style.display = "block";
      dialogue.bzdffnxnrdda++;
     } else if (dialogue.bzdffnxnrdda === 3) {
       yakaka3.style.display = "none";
      k.style.display = "none";
      dialogue.bzdffnxnrdda = true;
       dialogue.blockArrowTravel = false;
       dialogue.needleteetles2 = true;
       dialogue.needleteetles = false;
     }
    }
  });
} else if (!dialogue.needleteetles && !dialogue.beenInArtMirrorRoom && dialogue.beenInStairsRoom) {
  dialogue.blockArrowTravel = true;
  yakaka0.style.display = "block";
      k.style.display = "block";
      dialogue.bzdfdfmzmmdddddddzeubrdddda = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzdfdfmzmmdddddddzeubrdddda === 1) {
       yakaka0.style.display = "none";
      k.style.display = "none";
       dialogue.bzdfdfmzmmdddddddzeubrdddda = true;
       dialogue.blockArrowTravel = false;
       dialogue.beenInStairsRoom = false;
     }
    }});
}
}

function orangeLightBulbTalk() {
  if (dialogue.orangeflowerhasbeentaken) {
  yamaha1.style.display = "block";
  dialogue.blockArrowTravel = true;
      k.style.display = "block";
      dialogue.bzdfdfmzmdddddzeuffqwebrdddda = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzdfdfmzmdddddzeuffqwebrdddda === 1) {
       yamaha1.style.display = "none";
      k.style.display = "none";
       dialogue.bzdfdfmzmdddddzeuffqwebrdddda = true;
       dialogue.blockArrowTravel = false;
     }
    }});
  } else {
    yamaha2.style.display = "block";
  dialogue.blockArrowTravel = true;
      k.style.display = "block";
      dialogue.bzdfdfmmmmzmzmzffqwebrdddda = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzdfdfmmmmzmzmzffqwebrdddda === 1) {
       yamaha2.style.display = "none";
      k.style.display = "none";
       dialogue.bzdfdfmmmmzmzmzffqwebrdddda = true;
       dialogue.blockArrowTravel = false;
     }
    }});
  }
}

function iBetThatsWhatTheVialDid() {
  if (!dialogue.notaslkdfn) {
    yamaddha1.style.display = "block";
  dialogue.blockArrowTravel = true;
      k.style.display = "block";
      dialogue.bzdfdfmmdddmmzmzmzffqwebrdddda = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.bzdfdfmmdddmmzmzmzffqwebrdddda === 1) {
       yamaddha1.style.display = "none";
       yamaddha2.style.display = "block";
      k.style.display = "none";
      b.style.display = "block";
       dialogue.bzdfdfmmdddmmzmzmzffqwebrdddda++;
     } else if (dialogue.bzdfdfmmdddmmzmzmzffqwebrdddda === 2) {
       yamaddha2.style.display = "none";
      b.style.display = "none";
       dialogue.bzdfdfmmdddmmzmzmzffqwebrdddda = true;
       dialogue.blockArrowTravel = false;
       dialogue.notaslkdfn = true;
       redCircuit.style.display = "none";
                secretCrackRoom.style.display = "block";
                current.room = "secretCrackRoom";
     }
    }});
  } else {
                redCircuit.style.display = "none";
                secretCrackRoom.style.display = "block";
                current.room = "secretCrackRoom";
  }
                
}


function triggerStmiNotifWhenOnlyOneSwitchHasBeenFlipped() { //when entering l3
  if (dialogue.youveFlippedOneOfTheSwitches) {
    if ((dialogue.redSwitchFlipped || dialogue.blueSwitchFlipped || dialogue.greenSwitchFlipped) && (!(dialogue.redSwitchFlipped && dialogue.greenSwitchFlipped) || !(dialogue.redSwitchFlipped && dialogue.blueSwitchFlipped) || !(dialogue.greenSwitchFlipped && dialogue.blueSwitchFlipped))) {
    if (!dialogue.notifincreased) {
      increaseNotificationLobbyThree();
        dialogue.notifincreased = true;
    }
    dialogue.youflippedOneSwitch = true; 
    }
  } 
  if (dialogue.youflippedOneSwitch && !dialogue.youflippedOneSwitchComplete) {
      if ((dialogue.redSwitchFlipped && dialogue.greenSwitchFlipped) || (dialogue.redSwitchFlipped && dialogue.blueSwitchFlipped) || (dialogue.greenSwitchFlipped && dialogue.blueSwitchFlipped) || (!dialogue.redSwitchFlipped && !dialogue.blueSwitchFlipped && !dialogue.greenSwitchFlipped) ) {
        decreaseNotificationLobbyThree();
        dialogue.youflippedOneSwitch = false; 
      }
  }
}

function oneofthestones() {
  stmigo.play();
  if (!dialogue.dsfsdfdsfsdfxxx) {
 yamaddha3.style.display = "block";
  dialogue.blockArrowTravel = true;
      st.style.display = "block";
      dialogue.bzdsdddmzmxmaddda = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.bzdsdddmzmxmaddda === 1) {
       yamaddha3.style.display = "none";
       yamaddha4.style.display = "block";
      st.style.display = "block";
      dialogue.bzdsdddmzmxmaddda++;
     } else if (dialogue.bzdsdddmzmxmaddda === 2) {
       yamaddha4.style.display = "none";
           yamaddha5.style.display = "block";
      st.style.display = "none";
        b.style.display = "block";
              dialogue.bzdsdddmzmxmaddda++;
     } else if (dialogue.bzdsdddmzmxmaddda === 3) {
       yamaddha5.style.display = "none";
      b.style.display = "none";
       dialogue.bzdsdddmzmxmaddda = true;
       dialogue.blockArrowTravel = false;
       dialogue.dsfsdfdsfsdfxxx = true;
       decreaseNotificationLobbyThree();
     }
    }}); 
  }
}


function stymieGivesCandleHint() { //mark dont decrease the notifacation level after this because it imediately spawns another convo
  if (!dialogue.bleepmsodle) {
      stmigo.play();
 yamaddhahaha1.style.display = "block";
  dialogue.blockArrowTravel = true;
      st.style.display = "block";
      dialogue.ippityopitty = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.ippityopitty === 1) {
       yamaddhahaha1.style.display = "none";
       yamaddhahaha2.style.display = "block";
      st.style.display = "none";
      b.style.display = "block";
      dialogue.ippityopitty++;
     } else if (dialogue.ippityopitty === 2) {
       yamaddhahaha2.style.display = "none";
      yamaddhahaha3.style.display = "block";
      st.style.display = "block";
        b.style.display = "none";
              dialogue.ippityopitty++;
     } else if (dialogue.ippityopitty === 3 && !dialogue.gotTheTarotCloseUp) {
      yamaddhahaha3.style.display = "none";
      yamaddhahaha4.style.display = "block";
      st.style.display = "none";
      b.style.display = "block";     
      dialogue.ippityopitty++;
     } else if (dialogue.ippityopitty === 4 && !dialogue.gotTheTarotCloseUp) {
      yamaddhahaha4.style.display = "none";
      yamaddhahaha4a.style.display = "block";
      st.style.display = "none";
      b.style.display = "block";     
      dialogue.ippityopitty++;
     } else if (dialogue.ippityopitty === 5 && !dialogue.gotTheTarotCloseUp) {
      yamaddhahaha4a.style.display = "none";
      yamaddhahaha6.style.display = "block";
      dialogue.haventLookedAtTheCards = true;
      decreaseNotification();
      b.style.display = "none";
      k.style.display = "block";     
      dialogue.ippityopitty = 7;
     } else if (dialogue.ippityopitty === 3 && dialogue.gotTheTarotCloseUp) {
      yamaddhahaha3.style.display = "none";
      yamaddhahaha5.style.display = "block";
      st.style.display = "none";
      b.style.display = "block";     
      dialogue.ippityopitty++;
     } else if (dialogue.ippityopitty === 4 && dialogue.gotTheTarotCloseUp) {
      yamaddhahaha5.style.display = "none";
      yamaddhahaha5a.style.display = "block";
      st.style.display = "block";
      b.style.display = "none";     
      dialogue.ippityopitty++;
     } else if (dialogue.ippityopitty === 5 && dialogue.gotTheTarotCloseUp) {
      yamaddhahaha5a.style.display = "none";
      yamaddhahaha5b.style.display = "block";
      st.style.display = "block";
      b.style.display = "none";     
      dialogue.ippityopitty++;
     } else if (dialogue.ippityopitty === 6 && dialogue.gotTheTarotCloseUp) {
      yamaddhahaha5b.style.display = "none";
      yamaddhahaha6.style.display = "block";
      st.style.display = "none";
      k.style.display = "block";     
      dialogue.bleepmsodle2 = true;
      dialogue.ippityopitty++;
     } else if (dialogue.ippityopitty === 7) {
      yamaddhahaha6.style.display = "none";
      k.style.display = "none";     
      dialogue.ippityopitty = true;
      dialogue.bleepmsodle = true;
      dialogue.blockArrowTravel = false;
     }
    }}); 
  } else if (dialogue.testedTheCadnlesAgain && !alcove.solved) {
if (!dialogue.bleepmsodleeeeee) {
      stmigo.play();
 yamaddhahahababba1.style.display = "block";
  dialogue.blockArrowTravel = true;
      k.style.display = "block";
      dialogue.ippityopittyyy = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.ippityopittyyy === 1) {
       yamaddhahahababba1.style.display = "none";
       yamaddhahahababba2.style.display = "block";
      k.style.display = "none";
      st.style.display = "block";
      dialogue.ippityopittyyy++;
     } else if (dialogue.ippityopittyyy === 2) {
       yamaddhahahababba2.style.display = "none";
      yamaddhahaha5b.style.display = "block";
      st.style.display = "block";
              dialogue.ippityopittyyy++;
     } else if (dialogue.ippityopittyyy === 3) {
       yamaddhahaha5b.style.display = "none";
      yamaddhahaha6.style.display = "block";
      st.style.display = "none";
      k.style.display = "block";
              dialogue.ippityopittyyy++;
     } else if (dialogue.ippityopittyyy === 4) {
      yamaddhahaha6.style.display = "none";
        k.style.display = "none";
        dialogue.ippityopittyyy = true;
        dialogue.bleepmsodle2 = true;
        dialogue.bleepmsodleeeeee = true;
          dialogue.blockArrowTravel = false;
          dialogue.testedTheCadnlesAgain = false;
     }
    }});}
  } else if (dialogue.bleepmsodle2) {
if (!dialogue.bleepmsodleeeeeegggnnne) {
      stmigo.play();
 yamaddhahaha7.style.display = "block";
  dialogue.blockArrowTravel = true;
      b.style.display = "block";
      dialogue.ippityohoooooo = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.ippityohoooooo === 1) {
       yamaddhahaha7.style.display = "none";
       yamaddhahaha8.style.display = "block";
      b.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 2) {
       yamaddhahaha8.style.display = "none";
       yamaddhahaha9.style.display = "block";
      b.style.display = "none";
      st.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 3) {
       yamaddhahaha9.style.display = "none";
       yamaddhahaha10.style.display = "block";
      st.style.display = "none";
      b.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 4) {
       yamaddhahaha10.style.display = "none";
       yamaddhahaha11.style.display = "block";
      b.style.display = "none";
      st.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 5) {
       yamaddhahaha11.style.display = "none";
       yamaddhahaha12.style.display = "block";
      st.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 6) {
       yamaddhahaha12.style.display = "none";
       yamaddhahaha13.style.display = "block";
      st.style.display = "none";
      b.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 7) {
       yamaddhahaha13.style.display = "none";
       yamaddhahaha14.style.display = "block";
      b.style.display = "none";
      st.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 8) {
       yamaddhahaha14.style.display = "none";
       yamaddhahaha15.style.display = "block";
      st.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 9) {
       yamaddhahaha15.style.display = "none";
       yamaddhahaha16.style.display = "block";
      st.style.display = "none";
      stkni.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 10) {
       yamaddhahaha16.style.display = "none";
       yamaddhahaha17.style.display = "block";
      stkni.style.display = "none";
      stdru.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 11) {
       yamaddhahaha17.style.display = "none";
       yamaddhahaha18.style.display = "block";
      stdru.style.display = "none";
      stwit.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 12) {
       yamaddhahaha18.style.display = "none";
       yamaddhahaha19.style.display = "block";
      stwit.style.display = "none";
      stron.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 13) {
       yamaddhahaha19.style.display = "none";
       yamaddhahaha20.style.display = "block";
      stron.style.display = "none";
      st.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 14) {
       yamaddhahaha20.style.display = "none";
       yamaddhahaha21.style.display = "block";
      st.style.display = "none";
      stkni.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 15) {
       yamaddhahaha21.style.display = "none";
       yamaddhahaha22.style.display = "block";
      stkni.style.display = "none";
      stdru.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 16) {
       yamaddhahaha22.style.display = "none";
       yamaddhahaha23.style.display = "block";
      stdru.style.display = "none";
      stwit.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 17) {
       yamaddhahaha23.style.display = "none";
       yamaddhahaha24.style.display = "block";
      stwit.style.display = "none";
      stron.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 18) {
       yamaddhahaha24.style.display = "none";
             yamaddhahaha26.style.display = "block";

      stron.style.display = "none";
      b.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 19) {
      b.style.display = "none";
      k.style.display = "block";
      yamaddhahaha26.style.display = "none";
      yamaddhahaha25.style.display = "block";
      dialogue.ippityohoooooo++;
     } else if (dialogue.ippityohoooooo === 20) {
       yamaddhahaha25.style.display = "none";
      stron.style.display = "none";
      dialogue.ippityohoooooo = true;
        dialogue.blockArrowTravel = false;
        dialogue.bleepmsodleeeeeegggnnne = true;
        dialogue.bleepmsodle2 = false;
        decreaseNotification();
        dialogue.candlesHintConvoFinished = true;
     }
    }});
    }
      }
}

function bigCrystal() {
  coolRock1.style.display = "block";
  dialogue.blockArrowTravel = true;
      k.style.display = "block";
      dialogue.ippityohfdgoofgoooo = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.ippityohfdgoofgoooo === 1) {
       coolRock1.style.display = "none";
       coolRock2.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
      dialogue.ippityohfdgoofgoooo++;
     } else if (dialogue.ippityohfdgoofgoooo === 2) {
       coolRock2.style.display = "none";
      b.style.display = "none";
      dialogue.ippityohfdgoofgoooo = true;
        dialogue.blockArrowTravel = false;
     }}});
}

function howsBunhilda() {
  yayzazzzz1.style.display = "block";
  dialogue.blockArrowTravel = true;
      b.style.display = "block";
      dialogue.ippityoddddmnmnoo = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.ippityoddddmnmnoo === 1) {
       yayzazzzz1.style.display = "none";
       yayzazzzz2.style.display = "block";
      st.style.display = "block";
      b.style.display = "none";
      dialogue.ippityoddddmnmnoo++;
     } else if (dialogue.ippityoddddmnmnoo === 2) {
       yayzazzzz2.style.display = "none";
       yayzazzzz3.style.display = "block";
      b.style.display = "block";
      st.style.display = "none";
      dialogue.ippityoddddmnmnoo++;
     } else if (dialogue.ippityoddddmnmnoo === 3) {
       yayzazzzz3.style.display = "none";
      b.style.display = "none";
      dialogue.ippityoddddmnmnoo = true;
        dialogue.blockArrowTravel = false;
     }
    }});
}

function heyTheresASecretDoor() {
  if (!dialogue.secretrooomspdo) {
  hiddenDoorConv1.style.display = "block";
  dialogue.blockArrowTravel = true;
      b.style.display = "block";
      dialogue.ippimmmzmzmzmajjajakqkkqdmnmnoo = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.ippimmmzmzmzmajjajakqkkqdmnmnoo === 1) {
       hiddenDoorConv1.style.display = "none";
       if (dialogue.secretPaintingPassageDiscovered) {
       hiddenDoorConv2.style.display = "block";
       } else {
            hiddenDoorConv2a.style.display = "block";
       }
      k.style.display = "block";
      b.style.display = "none";
      dialogue.ippimmmzmzmzmajjajakqkkqdmnmnoo++;
     } else if (dialogue.ippimmmzmzmzmajjajakqkkqdmnmnoo === 2) {
       hiddenDoorConv2.style.display = "none";
       hiddenDoorConv2a.style.display = "none";
       hiddenDoorConv3.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
      dialogue.ippimmmzmzmzmajjajakqkkqdmnmnoo++;
     } else if (dialogue.ippimmmzmzmzmajjajakqkkqdmnmnoo === 3) {
       hiddenDoorConv3.style.display = "none";
      b.style.display = "none";
      dialogue.ippimmmzmzmzmajjajakqkkqdmnmnoo = true;
      dialogue.secretrooomspdo = true;
        dialogue.blockArrowTravel = false;

     }
    }});
  }
}

function itsAPocketDictionary() {
  if (!dialogue.pocketDictionaryObtainedFromPlinth) {
  poccit1.style.display = "block";
  dialogue.blockArrowTravel = true;
      b.style.display = "block";
      dialogue.ippimmmzmzmzkqkkqdmnmnoo = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.ippimmmzmzmzkqkkqdmnmnoo === 1) {
       poccit1.style.display = "none";
       poccit2.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
      dialogue.ippimmmzmzmzkqkkqdmnmnoo++;
     } else if (dialogue.ippimmmzmzmzkqkkqdmnmnoo === 2) {
       poccit2.style.display = "none";
       poccit3.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
      dialogue.ippimmmzmzmzkqkkqdmnmnoo++;
     } else if (dialogue.ippimmmzmzmzkqkkqdmnmnoo === 3) {
       poccit3.style.display = "none";
       poccit4.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
      dialogue.ippimmmzmzmzkqkkqdmnmnoo++;
     } else if (dialogue.ippimmmzmzmzkqkkqdmnmnoo === 4) {
       poccit4.style.display = "none";
       poccit5.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
      dialogue.ippimmmzmzmzkqkkqdmnmnoo++;
     } else if (dialogue.ippimmmzmzmzkqkkqdmnmnoo === 5) {
       poccit5.style.display = "none";
       poccit6.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
      dialogue.ippimmmzmzmzkqkkqdmnmnoo++;
     } else if (dialogue.ippimmmzmzmzkqkkqdmnmnoo === 6) {
       poccit6.style.display = "none";
      b.style.display = "none";
      dialogue.ippimmmzmzmzkqkkqdmnmnoo = true;
      dialogue.pocketDictionaryObtainedFromPlinth = true;
      dialogue.dictionaryAdded = true;
        dialogue.blockArrowTravel = false;
      pocketDictionary.style.display = "none";
      nowAvailable.style.display = "block";
          setTimeout(() => {
              nowAvailable.style.display = "none";
          }, 2000);}
    }});
  }
}

function letsHaveALookAtTheDictionary() {
  if (!dialogue.letshavelook) {
  dialogue.blockArrowTravel = true;
      knoba.style.display = "block";
      knoba.style.zIndex = 1001;
  poccit8.style.display = "block";
      dialogue.ippimmmzmzmzkmmmmnnnbvczmnmnoo = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.ippimmmzmzmzkmmmmnnnbvczmnmnoo === 1) {
       poccit8.style.display = "none";
      knoba.style.display = "none";
knoba.style.zIndex = 11;
      dialogue.letshavelook = true;
        dialogue.blockArrowTravel = false;
        textWork.style.display = "block";
        workspace1.style.display = "block";
        textWork.style.zIndex = 200000000; //mark
        document.body.style.background = "#000";  
        dialogue.ippimmmzmzmzkmmmmnnnbvczmnmnoo = false;
     }}});}
}


    function mustBeBig() {
      if (!dialogue.bigbigbigbigbigbig) {
      pococo1.style.display = "block";
             dialogue.blockArrowTravel = true;
      b.style.display = "block";
      dialogue.karsdsdfsdfzzfak = 1;
      document.addEventListener("keydown", function() {
      if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.karsdsdfsdfzzfak === 1) {
       pococo1.style.display = "none";
       pococo2.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
       dialogue.karsdsdfsdfzzfak++;
     } else if (dialogue.karsdsdfsdfzzfak === 2) {
       pococo2.style.display = "none";
       pococo3.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
       dialogue.karsdsdfsdfzzfak++;
     } else if (dialogue.karsdsdfsdfzzfak === 3) {
       pococo3.style.display = "none";
       pococo4.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
       dialogue.karsdsdfsdfzzfak++;
     } else if (dialogue.karsdsdfsdfzzfak === 4) {
       pococo4.style.display = "none";
      k.style.display = "none";
       dialogue.karsdsdfsdfzzfak = true;
       dialogue.blockArrowTravel = false;
        dialogue.bigbigbigbigbigbig = true;
     }}});
    }
    }



    function mustBeHalberd() {
      if (!dialogue.bigbdnnzmmnxmxncig) {
      pococo5.style.display = "block";
             dialogue.blockArrowTravel = true;
      b.style.display = "block";
      dialogue.karsddddmzmzmmzzfak = 1;
      document.addEventListener("keydown", function() {
      if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.karsddddmzmzmmzzfak === 1) {
       pococo5.style.display = "none";
       pococo6.style.display = "block";
      b.style.display = "none";
      kshift.style.display = "block";
       dialogue.karsddddmzmzmmzzfak++;
     } else if (dialogue.karsddddmzmzmmzzfak === 2) {
       pococo6.style.display = "none";
       pococo7.style.display = "block";
      khalb.style.display = "block";
      kshift.style.display = "none";
       dialogue.karsddddmzmzmmzzfak++;
     } else if (dialogue.karsddddmzmzmmzzfak === 3) {
       pococo7.style.display = "none";
      khalb.style.display = "none";
       dialogue.karsddddmzmzmmzzfak = true;
       dialogue.blockArrowTravel = false;
        dialogue.bigbdnnzmmnxmxncig = true;
     }}});
    }
    }