import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('spotify-playlist', 'Integration | Component | spotify playlist', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{spotify-playlist}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#spotify-playlist}}
      template block text
    {{/spotify-playlist}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
