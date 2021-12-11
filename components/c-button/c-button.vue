<template>
	<button class="vivify duration-150" hover-stay-time="250" hover-class="pulsate" :disabled="disabled" @tap="$emit('on-tap')">
		<slot />
	</button>
</template>

<script>
	export default {
		props: {
			disabled: {
				type: Boolean,
				default: false
			}
		}
	}
</script>

<style>
</style>
