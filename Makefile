run:
	@if [ -z "$(INPUT)" ]; then \
		echo "please input: make run INPUT=<your_input>"; \
	else \
		npm run start $(INPUT); \
	fi

test:
	npm run test

DEFAULT_INPUT := 4
DEFAULT_ITERATIONS := 100

perf:
	@INPUT=$${INPUT:-$(DEFAULT_INPUT)} && \
	ITERATIONS=$${ITERATIONS:-$(DEFAULT_ITERATIONS)} && \
	npm run perf $$INPUT $$ITERATIONS