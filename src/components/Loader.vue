<template>
    <div class="loader">
        <p>{{ loaderText }}</p>
        <span></span>
    </div>
</template>

<script>
export default {
    props: ['loaderText']
}
</script>

<style scoped>
.loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: initial;
    height: 3.75rem;
}
.loader p {
    padding: 0;
    margin: 0;
    color: #428dc9;
    animation: text 3.5s ease both infinite;
    font-size: .75rem;
    letter-spacing: .07rem;
}
@keyframes text {
    0% {
        letter-spacing: .07rem;
        transform: translateX(0);
    }
    40% {
        letter-spacing: .14rem;
        transform: translateX(26px);
    }
    80% {
        letter-spacing: .07rem;
        transform: translateX(32px);
    }
    90% {
        letter-spacing: .14rem;
        transform: translateX(0);
    }
    100% {
        letter-spacing: .07rem;
        transform: translateX(0);
    }
}
.loader span {
    position: absolute;
    bottom: 0;
    transform: translateX(4rem);
    height: 1rem;
    width: 1rem;
    background-color: #428dc9;
    display: block;
    animation: loading 3.5s ease both infinite;
}
.loader span:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #72c7ee;
    animation: loading2 3.5s ease both infinite;
}
@keyframes loading {
    0% {
        width: 1rem;
        transform: translateX(0);
    }
    40% {
        width: 100%;
        transform: translateX(0);
    }
    80% {
        width: 1rem;
        transform: translateX(4rem);
    }
    90% {
        width: 100%;
        transform: translateX(0);
    }
    100% {
        width: 1rem;
        transform: translateX(0);
    }
}
@keyframes loading2 {
    0% {
        transform: translateX(0);
        width: 1rem;
    }
    40% {
        transform: translateX(0);
        width: 80%;
    }
    80% {
        width: 100%;
        transform: translateX(0);
    }
    90% {
        width: 80%;
        transform: translateX(1rem);
    }
    100% {
        transform: translateX(0);
        width: 1rem;
    }
}
</style>
