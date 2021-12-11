export const lockMixin = {
	data() {
		return {
			heldStatus: false
		}
	},
	methods: {
		lock() {
			this.heldStatus = true
		},
		unlock() {
			this.heldStatus = false
		},
		async useOnce(fn) {
			if (!this.heldStatus) {
				this.lock()
				const res = await fn(this.unlock)
				return res
			}
		}
	}
}