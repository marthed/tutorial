const Summary = {
  functional: true,
  render(h, context) {
    const { model, ...props } = context.props;
    return SummaryPresentation({
      h,
      guests: model.getNumberOfGuests(),
      dishes: model.getMenu(),
      ...props,
    });
  },
};
