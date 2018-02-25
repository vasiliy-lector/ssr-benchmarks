const { count } = require('../benchmark');

const items = [];

const lorem = (
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, "  +
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi " +
  "ut aliquip ex ea commodo consequat. Duis aute irure dolor in " +
  "reprehenderit in voluptate velit esse cillum dolore eu fugiat" +
  "nulla pariatur. Excepteur sint occaecat cupidatat non proident" +
  "sunt in culpa qui officia deserunt mollit anim id est laborum."
);

for (var i = 0; i < count; i++) {
  items.push({
    title: `Item #${i}`,
    content: lorem,
    img: `http://lorempixel.com/${i % 2 === 0 ? 200 : 400}/${i % 3 === 0 ? 400 : 600}`,
    key: i
  });
}

module.exports = function(h, Component) {


  const TitleWrapper = ({ title }) => {
    return h(
      'div',
      {style: 'border: 10px solid green;color:#FFDDAA;padding:10px;'},
      h(
        'div',
        { class: 'dididididid' },
        "FKSDJFLSDJFDLSKFJDSLKFJSLKDFJLSDKFJ"
      ),
      h(Title, { title: title })
    )
  }

  class Title extends Component {
    render() {
      return (
        h(
          'div',
          {class: 'title', onClick: () => {}},
          h('h1', null, this.props.title)
        )
      )
    }
  }

  const ItemSectionGroupWrapper  = ({ content, children }) => {
    return h(
      'div',
      {style: 'background-color:lightblue;border:1px solid #FF44AA;'},
      h('h2', { class: 'wrapper-tile'}, Math.random() + "wrapper title"),
      h(
        'p',
          {style: 'font-size:15px;color:red;'},
        h(ItemSectionGroup, null, children)
      )
    )
  }

  class ItemSectionGroup extends Component {

    constructor(props, dispatch) {
      super(props, dispatch);
      this.state = { aboutToMount: true }
    }

    render() {
      return (
        h(
          'div',
          { class: 'really-long-and-stupid-class-name'},
          this.props.children
        )
      )
    }
  }

  const ItemSectionDescription = () => {
    return h(
      'div',
      null,
      h(
        'p',
        null,
        "This is a description for a section blah blah blah"
      )
    )
  }

  class ItemSection extends Component {

    constructor(props, dispatch) {
      super(props, dispatch);
      this.state = {
        even: props.id % 2 === 0
      }
      if (this.state.even) {
        this.setState({ showEven: true });
      }
    }

    render() {
      return (
        h(
          'div',
          null,
          this.state.showEven && h('h3', null, "This item section is even"),
          h(
            'div',
              { id: 'item-section' + this.props.id, style: 'font-weight:300;margin:10px 20px;' },
            this.props.children
          ),
          h(ItemSectionDescription, null)
        )
      )
    }
  }

  const ImageDescription = ({ content }) => {
    return (
      h(
        'span',
        null,
        content
      )
    )
  }

  const Image = ({src}) => {
    return (
      h(
        'div',
        null,
        h('img', { 'data-img': src, src }),
        h(ImageDescription, { content: Math.random() + "-content" })
      )
    );
  }

  const Item = ({ title, content, img }) => {
    const todos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
      return h('li', { id: `todo-${i}`}, i);
    });
    return h(
      'div',
      { class: "item" },
      h(TitleWrapper, { title }),
      h('p', {class: "item-content"}, content),
      h(Image, { src: img }),
      h('ul', { class: 'list'}, todos)
    )
  }

  const RichItemSubTitleWrapper = ({ children }) => {
    return h(
      'div',
        { style: 'width:200px;height:200px;overflow:scroll;' },
      h('h2', null, children)
    )
  }

  class RichItemSubtitle extends Component {
    render() {
      return h(
        'div',
          { style: `font-size:20px;id:${this.props.id};`},
        h(
          RichItemSubTitleWrapper,
          null,
          this.props.children
        )
      )
    }
  }

  const RichItem = ({ title, content, img }) => {
    return h(
      'div',
      { class: `item-${title}`},
      h(
        'div',
        { id: title + Math.random() },
        h(
          'h2',
          null,
          title
        ),
        h(
          RichItemSubtitle,
          { id: Math.random() },
          "Subtitle - " + Math.random()
        ),
        h(
          'p',
          { id: `p-${title}` },
          content
        )
      )
    )
  }

  return class App extends Component {
    render() {
      const renderedItems = items.map((item, i) => {
        const el = i % 2 === 0
          ? h(Item, item)
          : h(RichItem, item);
        const section = h(ItemSection, { id: i }, el);
        const group = h(ItemSectionGroup, null, section);
        return h(ItemSectionGroupWrapper, null, group);
      });
      return (
        h(
          "div",
          { class: 'app' },
          renderedItems
        )
      );
    }
  }
}