<template>
	<div class="webView">
		<div class="webView-content">
			<iframe class="iframe" scrolling="auto" frameborder="0" :src="href"></iframe>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			url: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				baseUrl:'https://www.varui.org.cn/#'
			}
		},
		computed: {
			href() {
				return this.baseUrl+this.url
			}
		},
		created() {
		}
	}
</script>

<style scoped>
	.webView {
		font-size: 16px;
		background-color: #fff;
		width: 330px;
		position: fixed;
    right:10px;
		z-index: 10;
		margin: 0;
		top: calc((100vh - 560px - 3.6rem) / 2 + 3.6rem);
		box-sizing: border-box;
		overflow-y: auto;
		background-image: url(./iPhone13.png);
    background-repeat: no-repeat;
		background-size: 100%;
		border-radius: 10px;
		padding: 48px 13px 25px 13px;
	}

	.webView-content {
		box-sizing: border-box;
		height: 100%;
		border-bottom-left-radius: 10px;
	}

	.iframe {
		height: 100%;
		width: 100%;
		border-radius: 10px;
	}

.iframe::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
  -webkit-overflow-scrolling: touch;
}

	@media screen and (min-width: 1200px) {
		.webView {
			width: 310px;
			height: calc(270px * 143.6 / 70.9);
		}

		.webView {
			top: calc((100vh - 310px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
		}
	}

	@media (max-width: 1200px) {
		.webView {
			display: none;
		}
	}

	@media screen and (min-width: 1366px) {
		.webView {
			width: 270;
			height: calc(270px * 143.6 / 70.9);
			top: calc((100vh - 270px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
		}
	}

	@media screen and (min-width: 1500px) {
		.webView {
			width: 310px;
			height: calc(310px * 143.6 / 70.9);
			top: calc((100vh - 310px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
		}
	}

	@media screen and (min-width: 1920px) {
		.webView {
			width: 360px;
			height: calc(360px * 143.6 / 70.9);
			top: calc((100vh - 350px * 143.6 / 70.9 - 3.6rem) / 2 + 3.6rem);
		}
	}
</style>
