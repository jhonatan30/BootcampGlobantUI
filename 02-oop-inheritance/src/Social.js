let Social = {
	share : function (friendName){
		this.friendName = friendName;
		console.log(`Share ${this.title} with ${this.friendName}`);
	},

	like : function (friendName){
		this.friendName = friendName;
		console.log(`${this.title} like ${this.friendName}`);
	}
}

export default Social;