<div class="loader"></div>

<style>
.loader {
    border: 16px solid #f6f6f6;
    border-radius: 50%;
    border-top: 16px solid #ff9a42;
    width: 120px;
    height: 120px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>