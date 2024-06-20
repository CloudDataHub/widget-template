## Widget Template Documentation

This documentation will guide you through creating widgets using the provided widget template. The template leverages React and is configured to generate a single HTML file containing HTML, CSS, and JS upon building the application. This approach is necessary as the widget will be displayed on the platform through an iframe.

### Key Considerations

- **No Static Files**: Since the widget runs within an iframe, you cannot use static files (like PNG images, fonts, etc.). If you need to use such files, they must be uploaded to external storage (e.g., an AWS S3 bucket) and linked accordingly.
- **Performance Impact**: Be mindful of the widget size. A larger widget can increase the load on the user's PC.

### Required Libraries

To work with the platform, use the `creo-widgets-lib` library, which provides two main functionalities:
1. **Fetching Parameters**: Parameters passed to the iframe by the main platform.
2. **Server Interaction**: Methods to interact with the server.

### Getting Started

#### Installing Dependencies

First, ensure you have the necessary dependencies installed:

```bash
npm install creo-widgets-lib
```

#### Fetching Parameters

To fetch parameters passed to the iframe, use the `getQueries` function from the `creo-widgets-lib` library:

```javascript
import { getQueries } from "creo-widgets-lib/lib/query";

const queries = getQueries();
console.log(queries);
```

#### Interacting with the Server

To interact with the server, import the relevant APIs from `creo-widgets-lib`:

```javascript
import { ConnectionApi, DocumentApi, WidgetApi } from "creo-widgets-lib";
```

- **ConnectionApi**: Used to fetch connection parameters to the database. These are needed for the `DocumentApi`.
- **DocumentApi**: Allows CRUD operations with the collection connected to the widget.
- **WidgetApi**: Enables updating and retrieving data specific to the widget. This is useful for storing widget-specific states, such as selected filters in a table or the currently open page number in a paginated widget. This ensures that the widget's data persists even after refreshing the page.

### Building the Widget

When you are ready to build your widget, use the following command:

```bash
npm run build
```

This command will generate a single HTML file containing all the necessary HTML, CSS, and JS. Ensure that any required static files are hosted externally and referenced via links.

### Deployment

Once built, you can deploy your widget by uploading the generated HTML file to the platform where it will be rendered within an iframe.

By following these guidelines, you can create efficient and effective widgets that integrate seamlessly with the platform, providing a rich user experience while maintaining performance.
