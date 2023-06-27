<script lang="ts">
  import { questionData } from "$lib/stores/questionData";
  import { error } from "@sveltejs/kit";
  import { onMount } from "svelte";
  import { toneMap } from "$lib/tones";
  import Loading from "$lib/components/Loading.svelte";
  import Notification from "$lib/components/Notification.svelte";

  let answerChoices: any = [];
  let wrongAnswer = false;

  const generateQuestionData = async () => {
    await fetch("/api/question")
      .then((res) => res.json())
      .then((data) => {
        questionData.set(data);
      })
      .catch(e => error(500, { message: e.message }));
  };

  const generateAnswerChoices = () => {
    let ret = [];
    for (let i = 1; i <= 4; i++) {
      ret.push(toneMap($questionData.question.slice(0, -1)+i));
    }
    return answerChoices = ret;
  }

  const submitAnswer = async (selection: string) => {
    console.log(selection);
    if ($questionData.answer.indexOf(selection) !== 1) return wrongAnswer = true;
    wrongAnswer = false;
    await generateQuestionData();
    generateAnswerChoices();
  }

  onMount(async () => {
    await generateQuestionData();
    generateAnswerChoices();
  });
</script>

{#if wrongAnswer}
  <Notification text="The correct answer was {$questionData.answer[1]}" />
{/if}

<div class="container">
  {#if $questionData && answerChoices.length > 0}
    <audio src="{$questionData.sound}" autoplay controls></audio>
    <div class="answer-choices">
      {#each answerChoices as choice}
        <button on:click={() => submitAnswer(choice)}><p>{choice}</p></button>
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
    width: 50vw;
    height: 50vh;
    min-width: 200px;
    min-height: 200px;
    border: 5px solid #ff9a42;
    border-radius: 15px;
    box-shadow: 0 0 10px black;
    background: #F3D9C3;
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
    font-weight: 400;
    color: #000;
    transition: .1s;
    min-width: 120px;
    font-family: 'Quicksand', sans-serif;
  }

  button:hover {
    background: #adcb74;
    color: #f5f5f5;
  }
</style>