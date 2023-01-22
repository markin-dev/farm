<template>
  <button
    type="button"
    class="button"
  >
    Restart
  </button>
</template>

<style lang="scss" scoped>
$color: #E485F8;

@keyframes sheen {
  0% {
    transform: skewY(-45deg) translateX(0);
  }
  100% {
    transform: skewY(-45deg) translateX(12.5em);
  }
}

.button {
  position: relative;
  padding: 12px 24px;
  background-color: #5362F6;
  color: $color;
  border: 2px solid $color;
  font-size: 32px;
  border-radius: 0.3em;
  overflow: hidden;
  user-select: none;
  cursor: pointer;

  &:before {
    content: "";
    background-color: rgba(255,255,255,0.5);
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }

  &:hover {
    background-color: $color;
    color: #5362F6;

    &:before {
      transform: skewX(-45deg) translateX(13.5em);
      transition: all 0.5s ease-in-out;
    }
  }
}
</style>
