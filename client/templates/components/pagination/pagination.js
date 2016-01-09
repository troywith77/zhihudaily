var currentDate = new ReactiveVar(),
	prevDays = new ReactiveVar(0);

Template.pagination.events({
	'click .prev': function() {
		prevDays.set(prevDays.get() + 1);
		currentDate.set(moment().subtract(prevDays.get(), 'days').format('YYYYMMDD'));
		changeDate(currentDate.get());
	},
	'click .next': function() {
		prevDays.set(prevDays.get() - 1);
		currentDate.set(moment().subtract(prevDays.get(), 'days').format('YYYYMMDD'));
		changeDate(currentDate.get());
	}
})