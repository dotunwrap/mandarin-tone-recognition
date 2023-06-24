<script lang="ts">
  import { storedData } from "$lib/store";
  import { error } from "@sveltejs/kit";
  import { onMount } from "svelte";
  import Loading from "$lib/components/Loading.svelte";
  import { toneMap } from "$lib/tones";
  import Vingette from "$lib/components/Vingette.svelte";

  let answerChoices: any = [];
  let wrongAnswer = false;

  const generateQuestionData = async () => {
    await fetch("/api/question")
      .then((res) => res.json())
      .then((data) => {
        storedData.set({ questionData: data });
      })
      .catch(e => error(500, { message: e.message }));
  };

  const generateAnswerChoices = () => {
    let ret = [];
    for (let i = 1; i <= 4; i++) {
      ret.push(toneMap($storedData.questionData.question.slice(0, -1)+i));
    }
    return answerChoices = ret;
  }

  const submitAnswer = async (selection: string) => {
    console.log(selection);
    if ($storedData.questionData.answer.indexOf(selection) !== 1) return wrongAnswer = true;
    wrongAnswer = false;
    await generateQuestionData();
    generateAnswerChoices();
  }

  onMount(async () => {
    await generateQuestionData();
    generateAnswerChoices();
  });
</script>

<div class="container">
  {#if $storedData.questionData && answerChoices.length > 0}
    {#if wrongAnswer}
      <div class="popup">
        <h2>Wrong Answer!</h2>
        <p>The correct answer was {$storedData.questionData.answer[1]}</p>
        <button on:click={() => submitAnswer($storedData.questionData.answer[1])}>Next Question</button>
      </div>
      <Vingette />
    {/if}
    <audio src="{$storedData.questionData.sound}" autoplay controls></audio>
    <div class="answer-choices">
      {#each answerChoices as choice}
        <button on:click={() => submitAnswer(choice)}>{choice}</button>
      {/each}
    </div>
  {:else}
    <Loading />
  {/if}
</div>

<style>
  * {
      display: flex;
      justify-content: center;
      align-items: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    width: 70vw;
    height: 70vh;
    min-width: 200px;
    min-height: 200px;
    border: 5px solid #ff9a42;
    border-radius: 15px;
    box-shadow: 0 0 10px black;
    background: #F3D9C3;
  }

  .popup {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding: .5rem;
    background: #f5f5f5;
    border: 3px solid #adcb74;
    border-radius: 20px;
    box-shadow: 0 0 10px black;
    width: 25vw;
    height: 25vh;
    min-width: 300px;
    min-height: 220px;
    z-index: 99;
  }

  .popup h2 {
    font-size: 2rem;
  }

  .popup p {
    font-size: 1.5rem;
  }

  .popup button {
    font-size: 1.3rem;
    padding: 13px;
    border-color: #ff9a42;
  }

  .popup button:hover {
    background: #ff9a42;
  }

  .answer-choices {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-items: center;
    flex-wrap: wrap;
  }

  button {
    background: #fefefe;
    border: 3px solid #adcb74;
    border-radius: 20px;
    padding: 15px;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 100;
    color: #000;
    transition: .1s;
    min-width: 120px;
  }

  button:hover {
    background: #adcb74;
    color: #f5f5f5;
  }
</style>